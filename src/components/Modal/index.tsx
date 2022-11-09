/* eslint-disable consistent-return */
import React, { useRef, useCallback, useEffect, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import SVGWrapper from '../SVGWrapper';

import * as S from './styles';

type ModalProps = {
  children?: ReactNode;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id?: string;
};

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen, id }) => {
  const containerRef = useRef(null);
  const keydownHandler = useCallback(
    ({ key }: { key: string }) => {
      switch (key) {
        case 'Escape':
          setIsOpen((prev) => !prev);
          break;
        default:
      }
    },
    [setIsOpen]
  );

  const handleClose = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', keydownHandler);

      return () => document.removeEventListener('keydown', keydownHandler);
    }
  }, [isOpen, keydownHandler]);

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (containerRef.current === e.target) {
      setIsOpen((prev) => !prev);
    }
  };
  return ReactDOM.createPortal(
    <S.Container isOpen={isOpen} onClick={closeModal} ref={containerRef} id={id}>
      <S.Content>{children}</S.Content>
      <S.Close type='button' onClick={handleClose}>
        <SVGWrapper iconName='close' />
      </S.Close>
    </S.Container>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default Modal;

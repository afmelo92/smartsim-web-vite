import React, { useEffect } from 'react';
import SVGWrapper from '../SVGWrapper';
import { ToastProps } from './Container';

import * as S from './styles';

type ToastMessageProps = {
  message: ToastProps;
  onRemoveMessage: (id: string) => void;
};

const ToastMessage: React.FC<ToastMessageProps> = ({ message, onRemoveMessage }) => {
  const { id, text, type, duration } = message;

  useEffect(() => {
    const timer = setTimeout(() => {
      onRemoveMessage(id);
    }, duration || 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [id, duration, onRemoveMessage]);

  function handleRemoveToast() {
    onRemoveMessage(id);
  }

  return (
    <S.ToastMessageContainer type={type} onClick={handleRemoveToast} tabIndex={0} role='button'>
      {type === 'danger' && <SVGWrapper iconName='close-circle' wrapperStyle='close-button' />}
      {type === 'success' && <SVGWrapper iconName='check-circle' wrapperStyle='close-button' />}
      <strong>{text}</strong>
    </S.ToastMessageContainer>
  );
};

export default ToastMessage;

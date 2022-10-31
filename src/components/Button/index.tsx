import React from 'react';
import * as S from './styles';
import SVGWrapper from '../SVGWrapper';
import Spinner from '../Spinner';

type Props = {
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lefticon?: string;
  righticon?: string;
  error?: boolean;
};

const Button: React.FC<Props & React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  type = 'button',
  size = 'md',
  loading = false,
  lefticon = '',
  righticon = '',
  disabled = false,
  children,
  id,
  error,
  ...rest
}) => {
  return (
    <S.Wrapper error={error} size={size} $loading={loading} disabled={disabled} id={id}>
      <button type={type} disabled={disabled || loading} {...rest}>
        {lefticon && !loading ? <SVGWrapper iconName={lefticon} wrapperStyle='left-icon' /> : null}
        {loading ? <Spinner /> : children}
        {righticon && !loading ? (
          <SVGWrapper iconName={righticon} wrapperStyle='right-icon' />
        ) : null}
      </button>
    </S.Wrapper>
  );
};

export default Button;

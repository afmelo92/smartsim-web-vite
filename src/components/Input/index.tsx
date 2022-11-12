import React, { useState } from 'react';
import Spinner from '../Spinner';
import SVGWrapper from '../SVGWrapper';

import * as S from './styles';

type Props = {
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lefticon?: string;
  righticon?: string;
  error?: boolean;
  label?: string;
};

const Input: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = ({
  type = 'text',
  loading = false,
  lefticon = '',
  righticon = '',
  disabled = false,
  id,
  label,
  error,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  return (
    <S.Wrapper>
      {label && (
        <label htmlFor={label}>
          <strong>{label}</strong>
        </label>
      )}
      <S.Container
        loading={loading ? 1 : 0}
        focus={focus}
        disabled={disabled}
        error={error}
        id={id}
      >
        {lefticon ? <SVGWrapper iconName={lefticon} wrapperStyle='left-icon' /> : null}
        <input
          id={label}
          type={type}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          {...rest}
        />
        {loading ? (
          <Spinner />
        ) : error ? (
          <SVGWrapper iconName='alert' />
        ) : righticon ? (
          <SVGWrapper iconName={righticon} />
        ) : null}
      </S.Container>
    </S.Wrapper>
  );
};

export default Input;

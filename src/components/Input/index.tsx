import React, { useState } from 'react';
import SVGWrapper from '../SVGWrapper';

import * as S from './styles';

type Props = {
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lefticon?: string;
  righticon?: string;
  error?: boolean;
};

const Input: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = ({
  type = 'text',
  loading = false,
  lefticon = '',
  righticon = '',
  disabled = false,
  id,
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
      <S.Container focus={focus} disabled={disabled} error={error} id={id}>
        {lefticon ? <SVGWrapper iconName={lefticon} wrapperStyle='left-icon' /> : null}
        <input type={type} onFocus={() => handleFocus()} onBlur={() => handleBlur()} {...rest} />
        {righticon ? <SVGWrapper iconName={righticon} wrapperStyle='right-icon' /> : null}
      </S.Container>
    </S.Wrapper>
  );
};

export default Input;

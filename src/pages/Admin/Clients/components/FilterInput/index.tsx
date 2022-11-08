import React, { useState, useEffect } from 'react';
import SVGWrapper from '@/components/SVGWrapper';

import * as S from './styles';

type Props = {
  loading?: boolean;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  lefticon?: string;
  righticon?: string;
  error?: boolean;
  label?: string;
  value: string | number;
  onChange: (value: string | number) => void;
};

const FilterInput: React.FC<Props & React.InputHTMLAttributes<HTMLInputElement>> = ({
  type = 'text',
  loading = false,
  lefticon = '',
  righticon = '',
  disabled = false,
  id,
  label,
  error,
  onChange,
  value: initialValue,
  ...rest
}) => {
  const [focus, setFocus] = useState(false);
  const [value, setValue] = useState(initialValue);

  const handleFocus = () => {
    setFocus(true);
  };

  const handleBlur = () => {
    setFocus(false);
  };

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    });

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <S.Wrapper>
      {label && (
        <label>
          <strong>{label}</strong>
        </label>
      )}
      <S.Container focus={focus} disabled={disabled} error={error} id={id}>
        {lefticon ? <SVGWrapper iconName={lefticon} wrapperStyle='left-icon' /> : null}
        <input
          type={type}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => handleFocus()}
          onBlur={() => handleBlur()}
          value={value}
          {...rest}
        />
        {righticon ? <SVGWrapper iconName={righticon} wrapperStyle='right-icon' /> : null}
      </S.Container>
    </S.Wrapper>
  );
};

export default FilterInput;

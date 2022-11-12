import React, { useState } from 'react';
import { Controller, RegisterOptions, FieldErrorsImpl } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import Spinner from '../Spinner';
import SVGWrapper from '../SVGWrapper';

import * as S from './styles';

type HookFormInputProps = {
  label?: string;
  loading?: boolean;
  errors?: Partial<FieldErrorsImpl<{ [key: string]: string }>>;
  righticon?: string;
  lefticon?: string;
  disabled?: boolean;
  control: any;
  transform: any;
  name: string;
  rules?: RegisterOptions;
  defaultValue?: string;
};

const HookFormInput: React.FC<HookFormInputProps & React.InputHTMLAttributes<HTMLInputElement>> = ({
  loading = false,
  errors = {},
  righticon,
  lefticon,
  disabled = false,
  control,
  transform,
  name,
  rules = {},
  defaultValue,
  label,
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
        focus={focus}
        disabled={disabled}
        error={errors?.[name]}
        loading={loading ? 1 : 0}
      >
        {lefticon && <SVGWrapper iconName={lefticon} />}
        <Controller
          defaultValue={defaultValue}
          control={control}
          name={name}
          rules={rules}
          render={({ field }) => (
            <input
              aria-invalid={errors?.[name] ? 'true' : 'false'}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}
              onChange={(e) => field.onChange(transform.output(e))}
              disabled={disabled || loading}
              value={transform.input(field.value)}
              id={label}
              {...rest}
            />
          )}
        />
        {loading ? (
          <Spinner />
        ) : errors?.[name] ? (
          <SVGWrapper iconName='alert' />
        ) : righticon ? (
          <SVGWrapper iconName={righticon} />
        ) : null}
      </S.Container>

      <ErrorMessage
        errors={errors}
        name={name}
        render={({ message }) => <small role='alert'>{message}</small>}
      />
    </S.Wrapper>
  );
};

export default HookFormInput;

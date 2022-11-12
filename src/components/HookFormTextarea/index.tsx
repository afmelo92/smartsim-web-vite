import React, { useState } from 'react';
import { Controller, RegisterOptions, FieldErrorsImpl } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import * as S from './styles';
import SVGWrapper from '../SVGWrapper';
import Spinner from '../Spinner';

type HookFormTextareaProps = {
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

const HookFormTextarea: React.FC<
  HookFormTextareaProps & React.TextareaHTMLAttributes<HTMLTextAreaElement>
> = ({
  id,
  loading = false,
  errors = {},
  righticon,
  lefticon,
  disabled = false,
  control,
  transform,
  name,
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
        error={errors?.[name]}
        loading={loading ? 1 : 0}
        disabled={disabled}
        id={id}
      >
        {lefticon && <SVGWrapper iconName={lefticon} />}
        <Controller
          defaultValue={defaultValue}
          control={control}
          name={name}
          render={({ field }) => (
            <textarea
              aria-invalid={errors?.[name] ? 'true' : 'false'}
              onFocus={() => handleFocus()}
              onBlur={() => handleBlur()}
              onChange={(e) => field.onChange(transform.output(e))}
              value={transform.input(field.value)}
              disabled={disabled || loading}
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

export default HookFormTextarea;

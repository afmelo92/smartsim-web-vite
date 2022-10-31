import React from 'react';
import { useRouteError } from 'react-router-dom';
import SVGWrapper from '../../components/SVGWrapper';

import * as S from './styles';

type ErrorProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
  status: number;
  statusText?: string;
  message?: string;
};

const NotFound: React.FC = () => {
  const error = useRouteError() as ErrorProps;
  console.error({ error });

  return (
    <S.Wrapper>
      <div className='header'>
        <SVGWrapper iconName='not-found-alert' />
        <h1>Oops!</h1>
      </div>

      <h4>A página que você procura parece não existir ou então houve um imprevisto.</h4>
      <h4>Verifique possíveis erros e tente novamente mais tarde.</h4>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </S.Wrapper>
  );
};

export default NotFound;

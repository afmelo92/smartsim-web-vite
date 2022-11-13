import React, { useMemo, useState } from 'react';
import Button from '@/components/Button';

import * as S from './styles';
import SVGWrapper from '@/components/SVGWrapper';
import HookFormInput from '@/components/HookFormInput';
import { useForm } from 'react-hook-form';
import Spinner from '@/components/Spinner';

type Message = {
  situacao: string;
  codigo: string;
  id: string;
  data_envio: string;
  operadora: string;
  qtd_credito: string;
  descricao: string;
  mensagem: string;
  telefone: string;
};

type MessageListProps = {
  messages: Message[];
  onRefresh: () => void;
  loading: boolean;
};

const Messagelist: React.FC<MessageListProps> = ({ messages, onRefresh, loading = false }) => {
  const [pagination, setPagination] = useState({ index: 0, offset: 5 });
  const {
    control,
    formState: { errors },
    watch,
  } = useForm<{ search: string }>({
    defaultValues: {
      search: '',
    },
    mode: 'onChange',
    reValidateMode: 'onChange',
  });

  const search = watch('search');
  const filteredMessages = useMemo(
    () =>
      messages.filter(
        (message) =>
          message.descricao.toLowerCase().includes(search.toLowerCase()) ||
          message.situacao.toLowerCase().includes(search.toLowerCase()) ||
          message.operadora.toLowerCase().includes(search.toLowerCase()) ||
          message.data_envio.toLowerCase().includes(search.toLowerCase()) ||
          message.mensagem.toLowerCase().includes(search.toLowerCase()) ||
          message.telefone.toString().includes(search)
      ),
    [messages, messages.length, search]
  );

  return (
    <S.Wrapper>
      <S.MessagesHeader>
        <h2>Mensagens enviadas</h2>
        <Button onClick={onRefresh} loading={loading} size='sm' lefticon='refresh' id='refresh'>
          Recarregar
        </Button>
      </S.MessagesHeader>

      <HookFormInput
        label='Pesquisa'
        name='search'
        id='search'
        placeholder='Pesquise por qualquer dado...'
        lefticon='magnifier'
        control={control}
        errors={errors}
        autoComplete='new-password'
        loading={loading}
        transform={{
          input: (value: string) => value,
          output: (e: React.BaseSyntheticEvent) => String(e.target.value),
        }}
      />

      <S.MessagesContainer>
        {loading ? (
          <Spinner />
        ) : filteredMessages.length <= 0 ? (
          <>
            <SVGWrapper iconName='empty' wrapperStyle='empty-messages' />
            <h1>Oops!</h1>
            <h3>Parece que não há nenhuma mensagem.</h3>
          </>
        ) : (
          filteredMessages.slice(pagination?.index, pagination?.offset).map((msg) => (
            <S.MessageBox key={msg.id}>
              <S.MessageHeader>
                <strong>Data/hora</strong>
                <strong>Status</strong>
                <strong>Operadora</strong>
                <strong>Mensagem</strong>
                <strong>Destino</strong>
              </S.MessageHeader>
              <S.MessageData>
                <p>{msg.data_envio}</p>
                <p>{msg.descricao}</p>
                <p>{msg.operadora}</p>
                <p>{msg.mensagem}</p>
                <p>{msg.telefone}</p>
              </S.MessageData>
            </S.MessageBox>
          ))
        )}
      </S.MessagesContainer>
      {!loading && (
        <S.Pagination>
          <Button
            id='pag-button'
            size='sm'
            disabled={
              (pagination.index === 0 && pagination.offset === 5) || filteredMessages.length <= 0
            }
            onClick={() =>
              setPagination((prev) => {
                if (prev.index >= 5) {
                  return {
                    index: prev.index - 5,
                    offset: prev.offset - 5,
                  };
                }

                return prev;
              })
            }
          >
            {'<'}
          </Button>
          pág: <strong>{pagination.offset / 5}</strong> de{' '}
          <strong>{Math.floor(filteredMessages.length / 5 + 1)}</strong>
          <Button
            id='pag-button'
            size='sm'
            disabled={filteredMessages.slice(pagination?.index, pagination?.offset).length < 5}
            onClick={() =>
              setPagination((prev) => ({
                index: prev.index + 5,
                offset: prev.offset + 5,
              }))
            }
          >
            {'>'}
          </Button>
        </S.Pagination>
      )}
    </S.Wrapper>
  );
};

export default Messagelist;

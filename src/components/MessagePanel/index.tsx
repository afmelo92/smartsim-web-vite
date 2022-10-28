import React from 'react';
import Button from '../Button';
import Input from '../Input';

import * as S from './styles';

const commands = [
  {
    id: 1,
    content: 'APN123456,VIVO,VIVO',
  },
  {
    id: 2,
    content: 'APN123456,claro,claro',
  },
  {
    id: 3,
    content: 'APN123456,tim,tim',
  },
  {
    id: 4,
    content: 'APN123456,oi,oi',
  },
  {
    id: 5,
    content: 'reset123456',
  },
  {
    id: 6,
    content: 'shutdown123456',
  },
];

const MessagePanel: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.PanelHeader>
          <h2>Painel de envio</h2>
          <Button size='sm' id='command' lefticon='command'>
            Criar comando
          </Button>
        </S.PanelHeader>
        <S.Form>
          {/* Incluir label no input e ajustar padding*/}
          <Input
            name='destination'
            id='destination'
            placeholder='(55) 9 9898-9898'
            lefticon='simcard'
          />
          <textarea name='content' placeholder='Digite seu comando aqui' />
          <Button>Enviar</Button>
        </S.Form>
      </S.Container>
      <S.Container>
        <S.PanelHeader>
          <h2>Mensagens recentes</h2>
        </S.PanelHeader>
        <S.CommandsContainer>
          {commands.map((command) => (
            <Button key={command.id} size='sm' lefticon='command' id='command'>
              {command.content}
            </Button>
          ))}
        </S.CommandsContainer>
      </S.Container>
    </S.Wrapper>
  );
};

export default MessagePanel;

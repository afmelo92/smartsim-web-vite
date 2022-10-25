import React from 'react';

import * as S from './styles';

const MessagePanel: React.FC = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <S.PanelHeader>
          <h2>Painel de envio</h2>
          <button type='submit'>Criar comando</button>
        </S.PanelHeader>
        <div id='send-form'>
          <input type='number' name='destination' id='destination' placeholder='(55) 9 9898-9898' />
          <textarea name='content' />
          <button type='submit'>Enviar</button>
        </div>

        <S.CommandsSection>
          <h2>Comandos recentes</h2>

          <S.CommandsContainer>
            <button type='button'>Command 1</button>
            <button type='button'>Command 1</button>
            <button type='button'>Command 1</button>
            <button type='button'>Command 1</button>
            <button type='button'>Command 1</button>
            <button type='button'>Command 1</button>
          </S.CommandsContainer>
        </S.CommandsSection>
      </S.Container>
    </S.Wrapper>
  );
};

export default MessagePanel;

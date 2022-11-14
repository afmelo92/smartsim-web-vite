import React, { useState, useEffect, useCallback } from 'react';
import { toastEventManager } from './';
import ToastMessage from './Message';

import * as S from './styles';

export type ToastProps = {
  id: string;
  type: 'default' | 'success' | 'danger';
  text: string;
  duration?: number;
};

const ToastContainer: React.FC = () => {
  const [messages, setMessages] = useState<ToastProps[]>([]);

  useEffect(() => {
    function handleAddToast({ type, text, duration = 5000 }: ToastProps) {
      setMessages((prev) => [
        ...prev,
        {
          id: String(Math.round(Math.random() * 100)),
          type,
          text,
          duration,
        },
      ]);
    }

    toastEventManager.on('addtoast', handleAddToast);

    return () => toastEventManager.removeListener('addtoast', handleAddToast);
  }, []);

  const handleRemoveMessage = useCallback((id: string) => {
    setMessages((prev) => prev.filter((message) => message.id !== id));
  }, []);

  return (
    <S.ToastContainer>
      {messages.map((message) => (
        <ToastMessage key={message.id} message={message} onRemoveMessage={handleRemoveMessage} />
      ))}
    </S.ToastContainer>
  );
};

export default ToastContainer;

import EventManager from '@/utils/EventManager';

export const toastEventManager = new EventManager();

type MessageProps = {
  type: 'default' | 'success' | 'danger';
  text: string;
  duration?: number;
};

export default function toast({ type = 'default', text, duration = 5000 }: MessageProps) {
  toastEventManager.emit('addtoast', {
    type,
    text,
    duration,
  });
}

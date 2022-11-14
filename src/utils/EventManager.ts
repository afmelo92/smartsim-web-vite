type ToastProps = {
  type: string;
  text: string;
  duration?: number;
};

export default class EventManager {
  listeners: Map<string, any>;

  constructor() {
    this.listeners = new Map();
  }

  on(event: string, listener: any) {
    if (!this.listeners.has(event)) {
      this.listeners.set(event, []);
    }

    this.listeners.get(event).push(listener);
  }

  emit(event: string, payload: ToastProps) {
    if (!this.listeners.has(event)) {
      return;
    }

    this.listeners.get(event).forEach((listener: any) => {
      listener(payload);
    });
  }

  removeListener(event: string, listenerToRemove: any) {
    if (!this.listeners.has(event)) {
      return;
    }

    const filteredListeners = this.listeners
      .get(event)
      .filter((listener: string) => listener !== listenerToRemove);

    this.listeners.set(event, filteredListeners);
  }
}

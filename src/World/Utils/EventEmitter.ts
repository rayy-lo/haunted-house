export default class EventEmitter {
  target: EventTarget;

  constructor() {
    this.target = new EventTarget();
  }
  on(eventName, listener) {
    this.target.addEventListener(eventName, listener);
  }
  once(eventName, listener) {
    this.target.addEventListener(eventName, listener, { once: true });
  }
  off(eventName, listener) {
    this.target.removeEventListener(eventName, listener);
  }
  emit(eventName, detail) {
    this.target.dispatchEvent(
      new CustomEvent(eventName, { detail, cancelable: true })
    );
  }
}

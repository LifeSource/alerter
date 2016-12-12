export default class Alert {
  static types = ['info', 'warning', 'error', 'success']

  constructor(type = 'info', message = '') {
    this.type = type;
    this.message = message;
  }

  getType() {
    return this.type;
  }

  setType(newValue) {
    if (newValue) {
      this.type = newValue;
    }
  }

  getMessage() {
    return this.message;
  }

  setMessage(newValue) {
    if (newValue) {
      this.message = newValue;
    }
  }
}

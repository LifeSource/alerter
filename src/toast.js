import Alert from './alert';

export default class Toast {

  constructor() {
    this.alert = new Alert();
    this.duration = 1000;
    this.toast = this.createElement('div');
  }

  createToast(options) {
    this.configureToast(options);
    return this.toast;
  }

  createElement(elementType) {
    return document.createElement(elementType)
  }

  configureToast(options) {
    this.alert.type = options.type;
    this.alert.message = options.message;
    this.duration = options.duration;
    this.toast.classList.add('toast');
    this.toast.classList.add(this.alert.type);
    this.toast.innerText = this.alert.message;

    return {
      type: this.alert.type,
      message: this.alert.message,
      duration: this.duration
    };
  }

  showToast() {
    this.toast.animate([{
      opacity: 0
    }, {
      opacity: 100
    }], {
      duration: this.duration,
      easing: 'ease'
    });
    document.body.appendChild(this.toast);
    this.removeToast();
  }

  removeToast() {
    setTimeout(() => document.body.removeChild(this.toast), this.duration);
  }

}

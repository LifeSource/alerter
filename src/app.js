import '../styles/styles.scss';
import Alert from './alert';
import Toast from './toast';

let app = document.getElementById('app')


let alertTypes = document.getElementsByClassName('alert')

for (let item of alertTypes) {
  item.addEventListener('click', showAlert, false);
}

function showAlert(event) {
  let toast = new Toast();
  let alertType = event.srcElement.classList[event.srcElement.classList.length - 1];

  switch(alertType.toLowerCase()) {
    case 'info':
      toast.createToast({ type: alertType, message: 'Info message - alert wins fatality!', duration: 3000 })
      toast.showToast()
      break;
    case 'warning':
      toast.createToast({ type: alertType, message: 'Warning message - biohazard has been activated!', duration: 3000 })
      toast.showToast()
      break;
    case 'error':
      toast.createToast({ type: alertType, message: 'Error message - something terrible happened!', duration: 3000 })
      toast.showToast()
      break;
    case 'success':
      toast.createToast({ type: alertType, message: 'Success message - yipeee!!!', duration: 3000 })
      toast.showToast()
      break;
    default:
      break;
  }
}


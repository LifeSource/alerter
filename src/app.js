import '../styles/styles.scss';
import Alert from './alert';
import Alerter from './alerter';

let alertTypes = document.getElementsByClassName("alertType")

console.log(alertTypes);

console.log(`Alert type: ${alertTypes}`);

let info = alertTypes[0];
info.addEventListener('click', handleInfo, false);


function handleInfo(event) {
  let element = addElement('div');

  configureElement(element, {
    type: 'Success',
    className: 'toast',
    message: 'message'
  });

  showAlert(element);

  element.animate([
    { opacity: 100 },
    { opacity: 50 },
    { opacity: 0 }], { duration: 3000, easing: 'ease'});
  setTimeout(function () {
    document.body.removeChild(element);
  }, 3000);
}

function addElement(elementType) {
  return document.createElement(elementType)
}

function configureElement(element, options) {
  switch(options.type.toLowerCase()) {
    case 'info':
      element.classList.add('info')
      break;
    case 'warning':
      element.classList.add('warning')
      break;
    case 'error':
      element.classList.add('error')
      break;
    case 'success':
      element.classList.add('success')
      break;
    default:
     break;
  }
  element.innerText = `${options.type} ${options.message}`;
  element.classList.add(options.className);
}

function showAlert(element) {
  element.animate([ { opacity: 0 }, { opacity: 1000 }], { duration: 3000, easing: 'ease'});
  document.body.appendChild(element);
}

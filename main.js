const Status = document.querySelector('.status');

let online = () => {
  Status.innerText = 'Connection Available';
  Status.style.backgroundColor = '#77D970';
};

let offline = () => {
  Status.innerText = 'No Connection';
  Status.style.backgroundColor = '#E02401';
};

if (window.navigator.online) {
  online();
} else {
  offline();
}

window.addEventListener('online', online);
window.addEventListener('offline', offline);

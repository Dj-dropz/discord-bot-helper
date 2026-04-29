const downloadButton = document.getElementById('downloadButton');
const toast = document.getElementById('toast');

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove('show');
  }, 2400);
}

downloadButton.addEventListener('click', () => {
  showToast('Download started: discordbothelper installer.');
});

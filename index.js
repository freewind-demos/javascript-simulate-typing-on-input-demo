const autoInput = document.getElementById('autoInput')
const textarea = document.getElementById('main');

textarea.onkeydown = (event) => {
  console.log("### event", event.key);
}

autoInput.onclick = () => {
  textarea.focus();
  const event = new KeyboardEvent('keydown', {
    bubbles: true, cancelable: true, key: 'a'
  });

  textarea.dispatchEvent(event);
}

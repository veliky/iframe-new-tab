const input = document.getElementById('input');
const output = document.getElementById('output');

/**
 * @param {String} url
 */
const setInput = (url) => {

  input.value = url;
  initFrame(url);
  output.innerText = '';
};

document.addEventListener('DOMContentLoaded', () => {

  /**
   * Loads the stored value to the input when loading the tab
   */
  chrome.storage.sync.get({'url': defaultURL}, ({url}) => {

    if (url) {
      input.value = url;
    }
  });

  /**
   * Initialization of possibility to choose an example
   */
  for (let node of document.getElementsByClassName('example_input')) {
    node.addEventListener('click', (event) => {

      event.preventDefault();
      setInput(event.target.innerText);

    });
  }

});

/**
 * Reloads the iframe with the value from the input to check
 */
document.getElementById('check_button').addEventListener('click', () => {

  initFrame(input.value);
  output.innerText = '';

});

/**
 * Saves value to storage
 */
document.getElementById('save_button').addEventListener('click', () => {

  let url = input.value;

  output.innerText = 'URL ' + url + ' has been saved.';
  chrome.storage.sync.set({url: url});
  initFrame(url);

});

/**
 * Sets the default value to the input and initializes the frame
 */
document.getElementById('set_default_button').addEventListener('click', () => {

  setInput(defaultURL);

});
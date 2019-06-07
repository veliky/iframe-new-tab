/**
 * Site whose policy is allowed to load through the iframe
 *
 * @type {string}
 */
const defaultURL = 'https://www.wikipedia.org/';

/**
 * Initializes iframe, deletes the previous element if it exists
 *
 * @param {String} url
 */
const initFrame = (url) => {

  const ID = 'new_tab_frame';

  if (document.getElementById(ID)) {
    document.getElementById(ID).remove();
  }

  let frame = document.createElement('iframe');

  frame.id = ID;
  frame.src = url;

  document.body.appendChild(frame);
};


/**
 * Loads the stored value when loading the tab and initializes the frame
 */
document.addEventListener('DOMContentLoaded', () => {

  chrome.storage.sync.get({'url': defaultURL}, ({url}) => {

    if (url) {
      initFrame(url);
    }
  });

});
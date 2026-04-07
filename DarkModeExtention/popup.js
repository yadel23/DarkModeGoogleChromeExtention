function getActiveTab(callback) {
  chrome.tabs.query({active: true, currentWindow: true}, (tabs) => callback(tabs[0].id));
}

document.getElementById('enable').addEventListener('click', () => {
  getActiveTab((tabId) => {
    chrome.scripting.executeScript({
      target: {tabId},
      files: ['content.js']
    });
  });
});

document.getElementById('disable').addEventListener('click', () => {
  getActiveTab((tabId) => {
    chrome.scripting.executeScript({
      target: {tabId},
      func: () => {
        const style = document.getElementById('dark-mode-ext-style');
        if (style) style.remove();
      }
    });
  });
});

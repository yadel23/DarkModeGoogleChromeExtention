if (!document.getElementById('dark-mode-ext-style')) {
  const style = document.createElement('style');
  style.id = 'dark-mode-ext-style';
  style.textContent = `
    html {
      filter: invert(90%) hue-rotate(180deg);
    }
    img, video, iframe {
      filter: invert(100%) hue-rotate(180deg);
    }
  `;
  document.head.appendChild(style);
}
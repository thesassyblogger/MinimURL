const container = document.querySelector('.blossom-container');

function createBlossom() {
  const blossom = document.createElement('img');
  blossom.src = '/cb.png';
  blossom.classList.add('blossom-petal');

  blossom.style.left = Math.random() * 100 + 'vw';
  blossom.style.animationDuration = 5 + Math.random() * 5 + 's';
  blossom.style.opacity = Math.random();
  blossom.style.fontSize = Math.random() * 50 + 50 + 'px';

  container.appendChild(blossom);

  setTimeout(() => {
    blossom.remove();
  }, 10000);
}

setInterval(createBlossom, 500);

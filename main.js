function init() {
  window.shootElem = document.getElementById('bullet');
  window.bulletListElem = document.getElementById('bullet-list');
  setPlayer();
  setEnemies();
  listenForShoot();
  listenForKeys();
}

function setPlayer() {
  window.playerElem = document.getElementById('player');
  window.playerElem.style.display = 'block';
  window.playerElem.style.position = 'absolute';
  window.playerElem.style.top = '550px';
  window.playerElem.style.left = '495px';
}

function movePlayer(direction) {
  if (direction === 'left') {
    const newPosition = window.playerElem.getBoundingClientRect().left - 10;
    window.playerElem.style.left = `${newPosition}px`;
  } else if (direction === 'right') {
    const newPosition = window.playerElem.getBoundingClientRect().left + 10;
    window.playerElem.style.left = `${newPosition}px`;
  }
}

function setEnemies() {
  window.enemyListElem = document.getElementById('enemy-list');
  window.originEnemyElem = document.getElementById('enemy');

  let topPosition = 150;
  for (let i = 0; i < 5; i++) {
    let leftPosition = 200;
    for (let i = 0; i < 6; i++) {
      const clone = window.originEnemyElem.cloneNode(false);
      clone.style.display = 'block';
      clone.style.position = 'absolute';
      clone.style.top = `${topPosition}px`;
      clone.style.left = leftPosition.toString() + 'px';
      leftPosition += 100;
      window.enemyListElem.appendChild(clone);
    }
    topPosition += 50;
  }
}

function shoot() {
  const clone = window.shootElem.cloneNode(false);
  clone.style.display = 'block';
  clone.style.backgroundColor = 'red';
  clone.style.position = 'absolute';
  clone.style.top = '530px';
  clone.style.left = '500px';
  clone.style.zIndex = '10';
  window.bulletListElem.appendChild(clone);

  let topPosition = 530;
  clone.style.top = `${topPosition}px`;
  topPosition -= 10;
  const intervalId = setInterval(() => {
    clone.style.top = `${topPosition}px`;
    topPosition -= 10;
  }, 20);
  setTimeout(() => {
    clearInterval(intervalId);
    clone.remove();
  }, 11_000);
}

function checkCollisions() {
  // get locations of all enemies on viewport grid
  window.enemyListElem.childNodes.forEach(enemy => {
    console.log(enemy);
    console.log(enemy.getBoundingClientRect());
  });

  // get location of all shots on viewport grid

  // check overlapping of the two
}

function listenForShoot() {
  document.addEventListener('keyup', function(event) {
    if (event.key === ' ') {
      shoot();
    }
  });
}

function listenForKeys() {
  document.addEventListener('keyup', function(event) {
    if (event.key === 'ArrowLeft') {
      movePlayer('left');
    } else if (event.key === 'ArrowRight') {
      movePlayer('right');
    }
  });
}

window.addEventListener('load', () => {
  init();
});

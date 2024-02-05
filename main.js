function init() {
  window.shootElem = document.getElementById('bullet');
  window.bulletListElem = document.getElementById('bullet-list');
  setPlayer();
  setEnemy();
  listenForShoot();
}

function setPlayer() {
  window.enemyElem = document.getElementById('player');
  window.enemyElem.style.display = 'block';
  window.enemyElem.style.position = 'absolute';
  window.enemyElem.style.top = '550px';
  window.enemyElem.style.left = '495px';
}

function setEnemy() {
  window.enemyListElem = document.getElementById('enemy-list');
  window.originEnemyElem = document.getElementById('enemy');
  let leftPosition = 200;
  for (let i = 0; i < 6; i++) {
    const clone = window.originEnemyElem.cloneNode(false);
    clone.style.display = 'block';
    clone.style.position = 'absolute';
    clone.style.top = '150px';
    clone.style.left = leftPosition.toString() + 'px';
    leftPosition += 100;
    window.enemyListElem.appendChild(clone);
  }
}

function shoot() {
  const clone = window.shootElem.cloneNode(false);
  clone.style.display = 'block';
  clone.style.backgroundColor = 'red';
  clone.style.position = 'absolute';
  clone.style.top = '530px';
  clone.style.left = '500px';
  window.bulletListElem.appendChild(clone);

  let topPosition = 480;
  clone.style.top = `${topPosition}px`;
  const intervalId = setInterval(() => {
    console.log(`hi from ${topPosition}`);
    clone.style.top = `${topPosition}px`;
    topPosition -= 50;
    console.log(`bye from ${topPosition}`);
  }, 200);
  setTimeout(() => {
    clearInterval(intervalId);
  }, 3000);
}

function listenForShoot() {
  document.addEventListener('keyup', function(event) {
    if (event.key === ' ') {
      console.log('space key was pressed');
      shoot();
    }
  });
}

window.addEventListener('load', () => {
  init();
});

const gridSquares = document.querySelectorAll('.grid');

let previousRandom = 0;

function moleAdjust() {
  gridSquares.forEach(grid => {
    grid.classList.remove('mole');
  })
  let rand = Math.ceil(Math.random() * 9);
  while (rand === previousRandom) {
    rand = Math.ceil(Math.random() * 9);
  }
  previousRandom = rand;
  console.log(rand);
  const randomSquare = document.querySelector(`.square${rand}`);
  randomSquare.classList.add('mole')
}

let moleMover = setInterval(moleAdjust, 700);

let points = 0;

function whackMole(event) {
  if(event.target.classList.contains('mole')) {
    points++;
    const score = document.querySelector('#points');
    score.innerText = `${points}`;
    clearInterval(moleMover);
    moleMover = setInterval(moleAdjust, 700);
    moleAdjust();
    const moleGrid = document.querySelector('#moleGrid');
    moleGrid.classList.add('splat');
    setTimeout(() => {
      moleGrid.classList.remove('splat');
    }, 200)
  }
}

gridSquares.forEach(grid => {
  grid.addEventListener('click', whackMole);
})
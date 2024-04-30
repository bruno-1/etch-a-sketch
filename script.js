const QTT_SQUARES_ON_EACH_SIDE_INITIAL = 16;

function changeQttSquaresOnEachSide(qttSquares) {
  qttSquares = parseInt(qttSquares);
  if (!qttSquares) qttSquares = QTT_SQUARES_ON_EACH_SIDE_INITIAL;
  if (qttSquares > 100) qttSquares = 100;

  while (document.querySelector("#container").firstChild) {
    document.querySelector("#container").removeChild(
      document.querySelector("#container").firstChild
    );
  }

  for (let i = 0; i < (qttSquares*qttSquares); i++) {
    const el = document.createElement("div");
    el.style['width'] = (QTT_SQUARES_ON_EACH_SIDE_INITIAL/qttSquares) + 'rem';
    el.style['height'] = (QTT_SQUARES_ON_EACH_SIDE_INITIAL/qttSquares) + 'rem';
  
    el.addEventListener("mouseover", (e) => {
      el.style["backgroundColor"] = "#000";
    });
  
    document.querySelector("#container").appendChild(el);
  }
}

document.querySelector("#qtt-squares-side").addEventListener("click", (e) => {
  const qtt = prompt("Enter the number of squares on each side");
  changeQttSquaresOnEachSide(qtt);
});

changeQttSquaresOnEachSide(QTT_SQUARES_ON_EACH_SIDE_INITIAL);
let card = document.querySelectorAll(".menu-card");
const cardWidth = card[0].getBoundingClientRect().width;
console.log(cardWidth)
for (var i = 0; i < card.length; i++) {
  arrangeCard(i, card[i]);
}
function arrangeCard(num, card) {
  card.style.left = num * (cardWidth+44) + "px";
}
let moveLeft=document.getElementById("menu-left")
let moveRight=document.getElementById("menu-right")
  console.log(card)
  let counter = 0;
  let no_of_card = 6;
  function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  const movecard = (direction) => {
    if (direction === "right") {
      if (counter !== no_of_card) {
        counter++;
      } else {
  
        restricted(direction);
        return;
      }
    } else {
      if (counter !== 0) counter--;
      else {
   
        restricted(direction);
        return;
      }
    }
    card.forEach((card) => {
      card.style.transform = `translateX(-${counter * (cardWidth+44)}px)`;
    });
  };

  const move_left = () => {
    movecard("left");
  };
  moveLeft.addEventListener("click",move_left)
  const move_right = () => {
    movecard("right");
  };
  moveRight.addEventListener("click",move_right)
  const restricted = (direction) => {
   
    if (direction === "right") {
      card.forEach((card) => {
        card.style.transform = `translateX(-${counter * (cardWidth+44)}px`;
      });
    } else {
 
      card.forEach((card) => {
        card.style.transform = `translateX(30%)`;
      });
    }

    sleep(150).then(() => {

      card.forEach((card) => {
        card.style.transform = `translateX(-${counter * (cardWidth+44)}px)`;
      });
    });
  };
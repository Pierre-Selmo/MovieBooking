// Hämta alla stols element från DOM
const seatElements = document.querySelectorAll(".seat");
const countElement = document.getElementById("count");
const totalElement = document.getElementById("total");

let price = 0;
let selectedSeats = [];

// Function för att ändra antalet valda stolar och priset
function updateSeatSelection() {
  const selectedSeatCount = selectedSeats.length;
  const totalPrice = selectedSeatCount * price;

  countElement.textContent = selectedSeatCount;
  totalElement.textContent = totalPrice;
}

// Lägger till ett klick event på varje stol
seatElements.forEach((seat) => {
  seat.addEventListener("click", () => {
    // Om stolen är ledig kan du välja mellan vald och ledig
    if (!seat.classList.contains("occupied")) {
      seat.classList.toggle("selected");

      const seatIndex = Array.from(seatElements).indexOf(seat);

      if (seat.classList.contains("selected")) {
        selectedSeats.push(seatIndex);
      } else {
        selectedSeats = selectedSeats.filter((index) => index !== seatIndex);
      }

      // uppdatera antalet stolar som är valda och totala priset
      updateSeatSelection();
    }
  });
});

// Funktion för att ändra priset på filmen när du väljar stolar
function setMoviePrice(newPrice) {
  price = newPrice;
  updateSeatSelection();
}

// exportera funktionen så att den kan användas i Main
export default setMoviePrice;

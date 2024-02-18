const seatButtons = document.getElementsByClassName('seat');
let countSeat = 0;
let seatFaka = 0;
let totalPrice = 0;
let totalClick = 0;

for(let seat of seatButtons){
    seat.addEventListener('click', function(){
        
        if (countSeat <= 4) {
            countSeat += 1;
            seat.style.backgroundColor = "#1DD100";
            setInnerText('seat-count', countSeat);
            let seatAdd = document.getElementById('seat-count');

        const seatText = parseInt(seatAdd.innerText);
        

        seatAdd.innerText = countSeat;

        const seatFaka = document.getElementById('faka-seat');
        }
        else{
            countSeat = countSeat
        }
        // seat.setAttributes('disabled', ' ');

        
    })
}
function setInnerText(id, value) {
    const setText = document.getElementById(id);
    setText.innerText = value;
}
// function changeColor() {
//     this.style.backgroundColor = 'green'; 
//   }
  
//   const seats = document.getElementsByClassName('kbd');
//   seats.forEach(function(seat) {
//     seat.addEventListener('click', changeColor);
//   });
const seatButtons = document.getElementsByClassName('seat');
let countSeat = 0;
let seatSub = 40;
let totalPrice = 0;
let totalClick = 0;

for(let seat of seatButtons){
    seat.addEventListener('click', function(e){
        
        if (countSeat < 4) {
            countSeat = countSeat + 1;
            seat.style.backgroundColor = "#1DD100";
            setInnerText('seat-count', countSeat);
            const seatAdd = document.getElementById('seat-count');

            const seatAddText = parseInt(seatAdd.innerText);
        

            seatAdd.innerText = countSeat;

            let subSeat = document.getElementById('sub-seat');

            const seatSubText = parseInt(subSeat.innerText);
            seatSub = seatSub - 1;
            setInnerText('sub-seat', seatSub)
            

            seatSub.innerText = subSeat;

            const placeTicket = e.target;
            console.log(e.target);
        }
        else{
            countSeat = countSeat;
        }
        

        
    })
}
function setInnerText(id, value) {
    const setText = document.getElementById(id);
    setText.innerText = value;
}
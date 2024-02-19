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

            const placeTicket = e.target.parentNode.childNodes[3].innerText;
            // const place = document.getElementById("seat-button");
            // const placeTicket = document.querySelector("kbd", place).innerText;
            // console.log(placeTicket);
            
            const price = parseFloat(document.querySelector("h5").innerText);
            // console.log(price);

            // const price = e.target
            // console.log(e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes);

            const selectedContainer = document.getElementById('selected-ticket-container');

            const tr = document.createElement('tr');

            const td = document.createElement('td');
            td.innerText = placeTicket;
            
            const td2 = document.createElement('td');
            td2.innerText = "AC_Business";
            const td3 = document.createElement('td');
            td3.innerText = price;

            tr.appendChild(td);
            tr.appendChild(td2);
            tr.appendChild(td3);
            // console.log(tr);
            selectedContainer.appendChild(tr);

            // calculate price
            totalPrice += price;
            document.getElementById('total-price').innerText = totalPrice;

            const grandPrice = document.getElementById('grand-total');
            grandPrice.innerText = totalPrice;

            
        }
        else{
            countSeat = countSeat;
        }
        
    
        
    })
}
    //coupon function
    const grandTotal = document.getElementById('grand-total');
    document.getElementById('coupon-btn').addEventListener('click', function(){
        const couponCode = document.getElementById('coupon-field').value;
        if (couponCode === "NEW15") {
            const discount = totalPrice * 0.15;
            const totalDiscount = totalPrice - discount;
            grandTotal.innerText = totalDiscount;
            console.log(totalDiscount);
        }
    })


function setInnerText(id, value) {
    const setText = document.getElementById(id);
    setText.innerText = value;
}

let calcButton = document.getElementById("calculate-button");
let resultTotal = document.getElementById("resultTotal");
let resultAmount = document.getElementById("resultAmount");
let resultTip = document.getElementById("resultTip");
calcButton.addEventListener("click",()=>{
    let billAmount = parseFloat(document.getElementById("bill-amount").value);
    let tipAmount = parseFloat(document.getElementById("tip-amount").value);
    let tipPercent = parseFloat(tipAmount/100);
    let tipBillAmount = parseFloat(billAmount*tipPercent);
    let totalAmount = billAmount+tipBillAmount;
    if(isNaN(totalAmount)){
        resultTip.innerHTML=null;
        resultTotal.innerHTML=null;
        resultAmount.innerHTML="Enter valid input !!!";
    }else{
        resultAmount.innerHTML= "The bill amount : <b>₹ "+billAmount+"</b>";
        resultTip.innerHTML="The tip amount : <b>₹ "+tipBillAmount+"</b>";
        resultTotal.innerHTML="The total amount : <b>₹ "+totalAmount+"</b>"; 
    }
    
})

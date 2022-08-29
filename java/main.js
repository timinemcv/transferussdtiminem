//airtime js
let opr
opr=prompt("Welcome to *894# banking\n 1>Quick Banking\n 2>Open an account\n 3>Loans\n 4>Firstmonie\n 5>Payattitude");
let stepB,stepC,stepD,stepE,message
let transfer,transferA,transferB

choosevalue()

function choosevalue(){
if (opr=="1"){ 
     stepB =prompt("Welcome to *894# banking\n 1>Transfer money\n 2>Airtime(self)\n 3>Airtime(others)\n 4>Enquiry services\n 5>Data\n 6>Pay bills\n 7>Next page") 
}else{
    alert("Please choose a value")};

inputamount()
}

function inputamount(){
if(stepB==="3"){
    stepC=parseInt(prompt("Enter amount"));
}else if(stepB=="1"){
    return transferussd ();
}else{alert("please choose a value")}
    inputnumber()
}

function inputnumber(){
    if(stepC ="number"){
        stepD=parseInt(prompt("Enter mobile number"))
    }else {alert("input number")}
    selectprovider()
}
function selectprovider(){
    if (stepD="number") {
        stepE=prompt("select recipient number\n 1>MTN \n 2>GLO\n 3>Airtel \n4>Etisalat \n5>others")
}else{alert("choose an option")}
inputpin()
}
function inputpin(){
    if(stepE<"5"){
    message=prompt("Recharge of N100 to 08062479300\n Please enter your 5 digit PIN:")
    alert("Successful. You can now increase your transfer limit from the comfort of your home. dial *894#, navigate to other services and follow the prompt. You Fi...")
}else{alert("please input corect pin")}
}
// transfer js

function transferussd(){
    transfer=parseInt(prompt("Enter amount"));
    enteraccount()
    }
function enteraccount(){
   if(transfer < "20000"){
    transferA=parseInt(prompt("Enter account no."));
   }else{alert("please enter account")}
    selectbank()
}
function selectbank(){
    if(transferA="number"){
       transferB=prompt("Select recipient bank\n 1>Zenith bank\n 2>Wema Bank\n 3>Standard Chartered\n 4>Providus Bank\n 5>Enter 3 letters of bank name");
    }else{alert("please choose an option")}
    enterpin()
}
  function enterpin(){
   if(transferB< "5"){
       message=prompt("Transfer N15000 to MICHEAL TIMILEYIN\n 2117185317 at N10.75 charge\nPlease enter your 5 digit PIN:");
       alert("Successful. Stay Connected Always! Simply dial\n *894*Amount# to buy airtime for self of dial\n *894*amount*mobileNumber# to recharge for third\n party. You Fi...")
    }
 }
       
    
// Store the wallet amount to your local storage with key "amount"


function wallet(){
    let sum=+document.querySelector("#amount").value;
    sum=sum+Number(localStorage.getItem("amount"))||0;
    localStorage.setItem("amount",sum);
    document.querySelector("#wallet").innerHTML=sum;
    document.querySelector("#amount").value="";
}




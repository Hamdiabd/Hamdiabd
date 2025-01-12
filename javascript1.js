 var v=confirm("Having Account");
 var yor_mony;
if(v==true)
{
    var yor_mony=prompt("Enter Having Mony");
}
else {  document.getElementById("java1").innerHTML="NOT Your Account   ";}

function print(){
    var age=document.getElementById("sum");
    var account=age.value;
    for(m=0; m<3;m++){
    if(account)
    {
       // document.getElementById('text').innerHTML=" welcome in the page";
       document.getElementById("java").style.color="black";
        document.getElementById('java').innerHTML="Age : "+account*365;
    }
    else {
        document.getElementById("java").style.color="red";
         document.getElementById('java').innerHTML="Enter Value Firset";}
    }return account;
}
function Buys(pro) {
    var pro1 = document.getElementById(pro);
    var pro2 = parseInt(pro1.value); // تحويل القيمة إلى رقم صحيح

    if (!yor_mony || isNaN(yor_mony)) {
        alert("Please enter a valid amount of money.");
        return;
    }

    if (!pro1.checked) {
        alert("Please select a product first.");
        return;
    }

    if (yor_mony >= pro2) {
        var ch = confirm("Your Account Will Be Withdrawn " + pro2 + ". Do you want to proceed?");
        if (ch == true) {
            yor_mony -= pro2; // طرح السعر من الرصيد
            document.getElementById("java1").style.color = "black";
            document.getElementById("java1").innerHTML = "Your Account Has Been Withdrawn " + pro2;
            alert("Your remaining balance = " + yor_mony);
        } else {
            // إذا اختار المستخدم "إلغاء"
            alert("The purchase has been canceled.");
            document.getElementById("java1").style.color = "blue";
            document.getElementById("java1").innerHTML = "The purchase has been canceled. No money was withdrawn.";
        }
    } else {
        document.getElementById("java1").style.color = "red";
        document.getElementById("java1").innerHTML = "Your Balance Is Not Enough. Product Price: " + pro2 + ". Your Balance: " + yor_mony;
    }
}
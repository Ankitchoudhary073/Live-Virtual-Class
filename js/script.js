
function calculate() {
    if(document.form1.txt1.value == "" || document.form1.txt1.value >= 100)
    {
       alert("Please enter your English marks and should be less or equal to 100");
       return false;
    
    }
    if(document.form1.txt3.value == "" || document.form1.txt3.value >=100)
    {
        alert("Please enter your Science marks and should be less or equal to 100");
        return false;
        
    }
    if(document.form1.txt4.value == "" || document.form1.txt4.value >=100)
    {
        alert("Please enter your Maths marks and should be less or equal to 100");
        return false;
        
    }    
    var num1=parseInt(document.forms["form1"]["txt1"].value,10);
    var num3=parseInt(document.forms["form1"]["txt3"].value,10);
    var num4=parseInt(document.forms["form1"]["txt4"].value,10);
    var total=num1+num3+num4;
    var percent=total/3;
    if (num1>num3 && num1>num4)
    var rslt3=num1;  
    else if (num3>num1 && num3>num4)
    rslt3=num3;
    else
    rslt3=num4;
    document.getElementById("rslt1").value= total;
    document.getElementById("rslt2").value= percent;
    document.getElementById("rslt3").value= rslt3;
    
}
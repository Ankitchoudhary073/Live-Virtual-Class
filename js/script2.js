

function Jfun1() {
    window.open("welcome.html","","top=400,left=400,height=200,width=300");
}

function Jfun3(){
    alert("Only for office use");
    document.getElementById('name').focus();
}
function Jfun4()
{
    document.getElementById("demo").style.color = "red";
}
function Jfun5()
{
    document.getElementById("demo").style.color = "blue";
}
function Jfun6(){
    if(form.name.value=="")
    {
        alert("Enter the Name first");
        document.getElementById("name").focus();
    }
    
}
function Jfun7()
{
    var answer=document.getElementById("select").value;
    var x;
    if(answer=="libra")
    {
        x="Today's harmonious aspect between Venus and Saturn supports practical improvements around the home, in the family dynamic, in your work, or with your health especially, dear Libra. You might pick up a new skill or make progress on a home or work project. You see the value of traditions and routines more than usual.";

    }
    else if(answer=="aries")
    {
        x="With Venus and Saturn working in harmony today, dear Aries, you have an increased love of order, organization, and clarity. It's an ideal time to take care of business and connect with others in practical ways. Attending to a responsibility towards an important person in your life is possible now, and it can be more comfortable than usual or perhaps quite pleasurable to do so. The day favors steady progress, reliability, and small efforts to secure future endeavors.";

    }
    else if(answer=="leo")
    {
        x="With Venus and Saturn harmonizing today, dear Leo, it's a good time for realistic assessments related to your health, work, or financial matters. You can more clearly see what needs to be improved or changed, and making adjustments comes with few if any regrets. Meeting responsibilities feels satisfying, too.";

    }
    else if(answer=="cancer")
    {
        x="Clarity may come to a relationship, or you benefit from a helpful and constructive conversation today, dear Cancer. Wisdom and experience come into play.";
    }
    else
    {
        x="Today's Venus-Saturn connection is excellent for your frame of mind, dear Capricorn. Filling responsibilities or putting in some hard work can be satisfying.";
    }
    document.getElementById("textarea").value=x;
}
function Jfun8(){
    alert("Wow you clicked it double time");
}
function Jfunq(){
    if(document.form3.option[0].checked==false && document.form3.option[1].checked==false && document.form3.option[2].checked==false)
    {
        alert("Select atleast one option")
        return false;
    }
    if(document.form3.option1[0].checked==false && document.form3.option1[1].checked==false && document.form3.option1[2].checked==false)
    {
        alert("Select atleast one option")
        return false;
    }
    var x = form3.option.value;
    var y = form3.option1.value;
    var marks = 0;
    if(x=="q11")
    marks=marks+2;
    if(y=="q22")
    marks=marks+2;
    if(marks==0)
    {
        alert("OOPS!! You got 0 Marks. Try Again.")
    }
    else{
        alert("Congratulations You got"+" "+ marks +" "+"marks");
    }
}
function Jfun(){
    
    
var count=0;
var chks = document.getElementsByName('chbx');
var hasChecked = false;
for (var i = 0; i < chks.length; i++)
{
	if (chks[i].checked)
	{
    
    count++;

	}
}

if (count < 2)
	{
    
	alert("Please select at least two.");
	return false;
	}

return true;
  
}
function searchit()
{
    var x = document.getElementById("search").value;
    alert(x);
   window.open("https://www.google.co.in/search?q="+x);
}
function Jfunr(val)
{
    var alphaExp = /^[a-zA-Z]+$/;
        if(!val.match(alphaExp))
        {
            document.getElementById("invalid").innerHTML="Invalid Input : Only alphabet";
            return false;
        }
        if(val.match(alphaExp))
        {
            document.getElementById("invalid").innerHTML="";
            return true;
        }
}
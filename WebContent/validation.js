/**
 * 
 */
function loginValidation(){
var phoneNumber = document.LoginForm.phno.value;
var password = document.LoginForm.pass.value;
var size  = phoneNumber.length;
if(phoneNumber=="" || password==""){
alert("Fields cannot be empty");
return false;
}
else if (size != 10) {
	alert("Invalid Phone Number");
	return false;
}
else 
	{
	return true;
	}
}
function signupValidation(){
	var name = document.SignUpForm.name.value;
	var phoneNumber = document.SignUpForm.phno.value;
	var password = document.SignUpForm.pass.value;
	var size  = phoneNumber.length;
	if(phoneNumber=="" || password=="" || name==""){
	alert("Fields cannot be empty");
	return false;
	}
	else if (size != 10) {
		alert("Invalid Phone Number");
		return false;
	}
	else 
		{
		return true;
		}
	}
function profileValidation()
{
	var infected = document.ProfileForm.infect.value;
	if(infected=="")
		{
		alert("Fill the Infection status")
		return false;
		}
	else {
		return true;
	}
}
function testValidation()
{
	var risk = -1;
	var risk1 = -1;
	var risk2 = -1;
	var risk3 = -1;
	var x = document.getElementById("symptom1");
	var x1 =document.getElementById("symptom2");
	var x2 = document.getElementById("symptom3");
	var x3 = document.getElementById("symptom4");
	if(x.checked == true  || x1.checked == true || x2.checked == true)
		{
			risk=1;
		}
	else if(x3.checked == true)
		{
		risk=0;
		}
	var y = document.getElementById("history1");
	var y1 = document.getElementById("history2");
	var y2 = document.getElementById("history3");
	var y3 = document.getElementById("history4");
	var y4 = document.getElementById("history5");
	if(y.checked == true || y1.checked == true || y2.checked == true || y3.checked == true)
		{
			risk1 = 1;
		}
	else if(y4.checked == true)
		{
			risk1 = 0;
		}
	var z = document.getElementById("travel1");
	var z1 = document.getElementById("travel2");
	if(z.checked == true)
		{
		 risk2=1;
		}
	else if(z1.checked == true)
		{
		risk2=0;
		}
	var o = document.getElementById("contact1");
	var o1 = document.getElementById("contact2");
	if(o.checked == true)
		{
		risk3=1
		}
	else if(o1.checked == true)
		{
		risk3=0;
		}
	if(risk==1 && risk1==0 && risk2==0 && risk3==0)
		{
		alert("Low Risk. Try to remain at home and help us in fighting this Covid virus.");
		}
	else if(risk==0 && risk1==1 && risk2==0 && risk3==0)
	{
	alert("Low Risk. Try to remain at home and help us in fighting this Covid virus.");
	}
	else if(risk==0 && risk1==0 && risk2==1 && risk3==0)
	{
	alert("Low Risk. Try to remain at home and help us in fighting this Covid virus.");
	}
	else if(risk==0 && risk1==0 && risk2==0 && risk3==1)
	{
	alert("Low Risk. We are proud of you for working in such a hard condition.");
	}
	else if(risk==1 && risk1==1 && risk2==0 && risk3==0)
	{
	alert("Moderate Risk. Get Yourself tested.");
	}
	else if(risk==1 && risk1==0 && risk2==1 && risk3==0)
	{
	alert("Moderate Risk. Get Yourself tested.");
	}
	else if(risk==1 && risk1==0 && risk2==0 && risk3==1)
	{
	alert("Moderate Risk. Get Yourself tested.");
	}
	else if(risk==1 && risk1==1 && risk2==0 && risk3==0)
	{
	alert("Moderate Risk. Get Yourself tested.");
	}
	else if(risk==0 && risk1==1 && risk2==1 && risk3==0)
	{
	alert("Low Risk. Try to remain at home and help us in fighting this Covid virus.");
	}
	else if(risk==0 && risk1==1 && risk2==0 && risk3==1)
	{
	alert("Low Risk. Try to remain at home and help us in fighting this Covid virus.");
	}
	else if(risk==0 && risk1==0 && risk2==1 && risk3==1)
	{
	alert("Low Risk. Try to remain at home and help us in fighting this Covid virus.");
	}
	else if(risk==1 && risk1==1 && risk2==1 && risk3==0)
	{
	alert("High Risk!!!. Call the local hospital for assisstance");
	}
	else if(risk==1 && risk1==1 && risk2==0 && risk3==1)
	{
	alert("High Risk!!!. Call the local hospital for assisstance");
	}
	else if(risk==1 && risk1==0 && risk2==1 && risk3==1)
	{
	alert("Moderate RIsk. Get yourself tested");
	}
	else if(risk==0 && risk1==1 && risk2==1 && risk3==1)
	{
	alert("Low Risk. Try to remain at home and help us in fighting this Covid virus.");
	}
	else if(risk==1 && risk1==1 && risk2==1 && risk3==1)
	{
	alert("High Risk beta!!!. Call the local hospital for assisstance");
	}
	else if(risk==0 && risk1==0 && risk2==0 && risk3==0)
	{
	alert("Low Risk. Try to remain at home and help us in fighting this Covid virus.");
	}
	
}
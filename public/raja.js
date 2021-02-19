function secondfunction()
{
	alert("hello there")
}

 	function myFunction() {
 		var x=
 		document.getElementById("studentname").value;
 		console.log("name value:"+x);
 		var y=
 		document.getElementById("rollnumber").value;
 		var z=
 		document.getElementById("password").value;
 		if (x==="") 
 			{
 				alert("enter your name ");
 			}
 		if(y==="")
 		{
 			alert("enter rollnumber");
 		}
 		if(z==="")
 		{
 			alert("enter password");
 		}
 		if(z.length<6)
 		{
 			messages.push("password must be longer than 6 characters");

 		}
 	}



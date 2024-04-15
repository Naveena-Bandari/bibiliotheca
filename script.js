function sub(){
			var a1=document.getElementById("name").value;
			var a2=document.getElementById("address").value;
			var a3=document.getElementById("quantity").value;
			var a4=document.getElementById("pin").value;
			if (a1=="" && a2=="" && a3=="" && a4==""){
				document.getElementById("place1").style.color="red";
				document.getElementById("place1").style.textAlign="center";
				document.getElementById("place1").style.fontSize="150%";
				document.getElementById("place1").style.padding="10px 0";
				document.getElementById("place1").innerHTML="ERROR!! Enter form accurately";
				
			}
			else if (a1!="" && a2!="" && a3!="" && a4!=""){
				document.getElementById("place1").style.color="green";
				document.getElementById("place1").style.textAlign="center";
				document.getElementById("place1").style.fontSize="150%";
				document.getElementById("place1").style.padding="10px 0";
				document.getElementById("place1").innerHTML="ORDER PLACED SUCCESSFULLY!!!";
				
			}
}
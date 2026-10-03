function volume_sphere() {
    //Write your code here
	const radius= document.getElementById("radius").value;
	if(radius<0){
		document.getElementById("volume").value = "NAN"
	}
	let volume = (4/3)*Math.PI*radius*radius*radius;
	document.getElementById("volume").value = volume
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

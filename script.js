function volume_sphere() {
    //Write your code here
	const input= document.getElementById("radius").value.trim();
	const radius = Number(input);
	
	if(input ==="" || !Number.isFinite(radius) || radius <0){
		document.getElementById("volume").value = "NAN"
	}
	let volume = (4/3)*Math.PI*radius*radius*radius;
	document.getElementById("volume").value = volume.toFixed(4)
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

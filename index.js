$('#ripple').ripples({
	resolution: 512,
	dropRadius: 20,
	perturbance: 0.04,
});


// function Submit(e){
// e.preventDefault()
// let password = document.getElementById('passy')
// let button = document.getElementById('btnoo')
// 		if(password.length < 10){
// 		console.log(10)
// }
// }
let password = document.getElementById('passy')
let button = document.getElementById('btnoo')
// button.addEventListener('click', (e)=>{
// 	e.preventDefault()
// 	if(password.value.length == 5){
// 		// button.innerText = 'hello'
// 		button.classList.add('active')
		
// 	}
// })

const MouseOver = (e)=> {
	// if(password.value.length == 5){
	// 	// button.innerText = 'hello'
	// button.style.backgroundColor = 'red;'
	button.style.transform = 'translateX(160px);'
	
	// }
	console.log('hello')
}
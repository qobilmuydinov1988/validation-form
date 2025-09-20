let form=document.getElementById('myForm');
let formControl=document.querySelector('.form-control');
let inputText=document.getElementById('user');
let inputEmail=document.getElementById('email');
let inputPhone=document.getElementById('phone');
let inputPassword1=document.getElementById('password1'); 
let inputPassword2=document.getElementById('password2');
let message=document.querySelector('small'); 
	let fadeBox=document.querySelector('.fade-box');

form.addEventListener('submit', function(event){
	let x=document.getElementById('myForm');
	
	event.preventDefault();
	checkValidate();

	
     })

function checkValidate () {
    let valText=inputText.value.trim();
	let valEmail=inputEmail.value.trim();
	let valPhone=inputPhone.value.trim();
	let valPassword1=inputPassword1.value.trim();
	let valPassword2=inputPassword2.value.trim();
	let reg=/^\+998\d{2}\d{3}\d{2}\d{1,}/;
	let regPass1=/(?=(.*\d){3})(?=(.*[a-zA-Z]){3})/;

	
	//-----text----
	
	if(valText==""){
		showErrorMessage(inputText, "User name doesn't have to blank")
	}
	else{
		showSuccessMessage(inputText)
	}
	//---mail----

	if(valEmail==""){
		showErrorMessage(inputEmail, "Email doesn't have to blank")
	}
	else if (!checkEmail()) {
		showErrorMessage(inputEmail, "Email doesn't have a valid value")
		
	}

	else{
		showSuccessMessage(inputEmail)
	}

	//---pHone number---
	if(valPhone==""){
		showErrorMessage(inputPhone, "Phone number doesn't have to blank")
	}

	
	
	else if (!reg.test(valPhone)){
		showErrorMessage(inputPhone, "Phone number has to be as pattern");


	}
	else if(valPhone.length<13){
		showErrorMessage(inputPhone, "Phone number has to be more than 13 characters")


	}
	
	else{
		showSuccessMessage(inputPhone)
	}

		//---Password1---
		if(valPassword1==""){
			showErrorMessage(inputPassword1, "password1 doesn't have to be blank")
		}
		else if(!regPass1.test(valPassword1)){
			showErrorMessage(inputPassword1, 'password mast be at least 3 letters and 3 digitals')

		}
		else{
			showSuccessMessage(inputPassword1)
		}
		//---Password2---
		if(valPassword2==''){
			showErrorMessage(inputPassword2, "password2 doesn't have to be blank")
		}

		else if(valPassword1!==valPassword2){
			showErrorMessage(inputPassword2, 'password mast be same as first password')

		}
		else{
			showSuccessMessage(inputPassword2)
		}
 
		submitForm()
}
     function showErrorMessage(input, textMessage){
     	let parent=input.parentElement
     	let small=parent.querySelector('small');
     	small.innerHTML=textMessage;
     	input.parentElement.className='form-control error'
         }
        

        function showSuccessMessage(input){
     	
     	input.parentElement.className='form-control success'
         }


         function checkEmail () {
         	let val=inputEmail.value.trim();

         	if(val.indexOf('@')<1){
         		return false;

         	}


         	else if(val.indexOf('.')<val.indexOf('@')+3){
         		return false;

         	}

         	else{
         		return true;
         	}
         }
		 let check=document.querySelector('input[type="checkbox"]');
		 check.addEventListener('click', function(){
			if(this.checked){
				inputPassword1.type='text';
			}
			else{
				inputPassword1.type='password';
			}

		 })
		 function submitForm () {	
		 	let formControl=document.getElementsByClassName('form-control');
            let index=0;
	      

	      for(let i=0; i<formControl.length; i++){
		
     		if(formControl[i].classList.contains('success')){
			
			index++;
		
			console.log(index)

		}
		
		}

		if(index==formControl.length){
			
						
			

			 


	     	fadeBox.classList.add('show');
			
			
			 setTimeout(hideBox, 2000);
			 function hideBox() {
			 	
		     fadeBox.classList.remove('show');
			
			 }
			  setTimeout(formSubmit, 2500);
			 function formSubmit() {
			 	
		     form.submit()
			
			 }


	}

		 }
	
// all validations go here 
function fnValidateForm() {
    if(!fnValidateName()) {
        return false; 
    }

    if(!fnValidatePassword()) 
        return false; 

    if(!fnValidateType())
        return false; 


    return true; 
}

function fnValidateName() {
    // monika6 
    uname = document.loginForm.uname.value 
    if(uname.length <6) {
        alert("Sorry Please Enter Min 6 Chars")
        return false; 
    }

    if(uname.charAt(0) ==' ') {
        alert("Name should not have leading spaces")
        return false; 
    }

    spl ="1234567890~!@#$%^&*()<>?/.,\\"; 

    for(var i=0; i<spl.length; i++) {
        if(uname.indexOf(spl.charAt(i))>=0) {
            alert("sorry No Special Chars")
            return false; 
        }
    }
    return true; 
}

function fnValidatePassword() {
    return true; 
}


function fnValidateType() {

   var utype=  document.loginForm.utype; 

   for(var i=0; i<utype.length;i++) {
       if(utype[i].checked)
            return true; 
   }

   alert("Please select your user type ")
   return false; 

}
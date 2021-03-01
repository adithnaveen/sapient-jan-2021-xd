function fnPostData() {

    let contact ={}; 
    contact.name = document.getElementById("name").value
    contact.email = document.getElementById("email").value
    contact.phone = document.getElementById("phone").value
    contact.city = document.getElementById("city").value

    console.log(contact);
    return false; 
}
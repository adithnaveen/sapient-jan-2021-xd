var animal =  {
    name: "Jackey", 
    species: "Dog", 
    age: 5, 
    speak : function () {
        console.log("Woof... woof... ");
    }
}
 
// the function knows the return type post calculation like (ate.now()  - birthYear) return is number 
// if needed explicitly specify the return type and do appropriate conversion 
function calculateAge(birthYear : number) : string {
    let numToString : number =  Date.now()  - birthYear; 
    return numToString.toString(); 
}

// as much as possible avoid any type 
function namesLength(firstName :string , lastName : string )  {
    return firstName.length + lastName.length; 

}
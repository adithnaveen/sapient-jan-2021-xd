function Person(name, pid){
    this.name = name; 
    this.pid = pid; 

    // anythigng which is private cannot be accessed 
    // outside the function /class 
    var fnPrivate = function() {
        console.log("Name is "+ name);
        console.log("Pid is " + pid);
    }

    // privilleged function s
    this.fnAccessPrivate = function() {
        console.log("fnAccessPrivate-Name: " + this.name);
        console.log("fnAccessPrivate-Pid: " + this.pid);
        fnPrivate(); 
    }
}

// public function 
Person.prototype.display = function() {
    console.log('====================================');
    console.log("Name " + this.name);
    console.log("Pid " , this.pid);
    console.log('====================================');
    // even proto functions cannot call private functions 
   //  fnPrivate(); 
}

Person.prototype.myDisplay = function() {
    console.log("Name " + this.name);
    console.log("Pid " , this.pid);
}

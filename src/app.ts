// Code goes here!

class Departeman {
    name : string ;
    // employees :  string[]= []
    constructor (n : string){
        this.name = n ;

    }
    describe(this:Departeman){
        console.log("departmen" +  this.name)
    }
}
const accounting = new Departeman("accounting") ;

accounting.describe();
const copyAccount = {name: "DYMMY" , describe :  accounting.describe} ;
copyAccount.describe()
// we can overwrite method after inheritance 
class NewDepartment {
    name : string ;
    employees :  string[]= []
    constructor (private id:string,n : string){
        this.name = n ;

    }
    describe(this:NewDepartment){
        console.log("departmen" +  this.name + "_" + this.id)
    }
    addEmployee(employee: string) {
        
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITD extends NewDepartment {
    constructor(id:string , name : string){
        super(id , name)
    }
    printEmployeeInformation(){
        console.log("this is overwrite method from child class" , this.name)
    }
    
    
}


const sample  = new ITD("2","it") ;
//this run method in child class that overwrite to parent class method
sample.printEmployeeInformation();
// we can overwrite method after inheritance 
class NewDepartment {
    //with below code we couldnt access to this prop in child
    // private employees: string[] = [];
    //solutions 
    protected employees : string[] = [];
    name : string ;
    
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
    private lastReport: string;
    constructor(id:string , name : string ,private reports: string[] ){
        super(id , name)
        this.lastReport = reports[0]
    }

    get mostRecentReport() {
      if (this.lastReport) {
        return this.lastReport;
      }
      throw new Error('No report found.');
    }
    set mostRecentReport(value : string){
        if (!value) {
            throw new Error('Please pass in a valid value!');
          }
          this.addReport(value);
    }
    addReport(text: string) {
        this.reports.push(text);
        this.lastReport = text;
      }
    printEmployeeInformation(){
        console.log("this is overwrite method from child class" , this.name)
    }
    addEmployee(employee : string){
        this.employees.push(employee) ;
        console.log("this is from child overWrite" , this.employees)
    }
    
    
}


const dtl  = new ITD("2","it", ["this is last report"]) ;
//this run method in child class that overwrite to parent class method
dtl.mostRecentReport = 'Year End Report';
// dtl.addReport('Something went wrong...');
console.log(dtl.mostRecentReport);
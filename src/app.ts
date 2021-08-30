// Code goes here!

class Department {
    name : string ;
    employees :  string[]= []
    constructor (private id:string,n : string){
        this.name = n ;

    }
    describe(this:Department){
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
class AccountingDepartment extends Department {
    constructor(id: string, private reports: string[]) {
      super(id, 'Accounting');
    }
  
    addReport(text: string) {
      this.reports.push(text);
    }
  
    printReports() {
      console.log(this.reports);
    }
  }
const accounting = new Department("d1","accounting") ;
const it = new AccountingDepartment("it" , ["this new apper"])
it.addReport("kia is bala")
it.printReports();

accounting.addEmployee('Max');
accounting.addEmployee('Manu');


//access to employee only after add make obj ---after change accessModifier private---------
// accounting.employees[2] = "anne"
// accounting.addEmployee("anneNosia")


// accounting.describe();
// accounting.printEmployeeInformation();
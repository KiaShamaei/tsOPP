class DepartmentJob  {
    employees : string[] = []
	constructor (private id:string , public name :  string ){
		this.name = name;
		
	}
	describeJob (this : DepartmentJob){
		console.log("department " , this.name , this.id)
	}
	addEmployee ( employee : string){
		this.employees.push(employee)
	}

}

class Dit extends DepartmentJob {
	constructor (id : string ,name :string, private reports : string[]){
		super(id, name)
	}
	addReport ( text : string){
		this.reports.push (text)
	}
	printReport(){
		console.log("this de have reports " + this.reports + "_" + this.name  )
	}
	
}

const dit = new Dit("12", "IT" , ["kia is bala"]);
dit.printReport();
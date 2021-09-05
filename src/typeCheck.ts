class CarType {
	drive(){
		console.log("car drive")
	}
}
class TruckTyoe {
	drive (){
		console.log("truck drive")
	}
	cargo( number  : number){
		console.log(number +  " pieces in truck!")
	}
}
type Vehicle = CarType|TruckTyoe ; 
const v1 = new CarType() ;
const v2 = new TruckTyoe() ;

function useVehicle (v : Vehicle){
	v.drive()
	// v.cargo() this is error because cartype dosent have this method 
	if (v instanceof TruckTyoe)
	v.cargo(1000)

}
useVehicle(v2)
// we impliment multi interface but extend just one abstract class



interface Cari {
	model : string ,
	color  : string , 
	newModel : boolean 
}
interface Owner {
	name : string,
	family : string
}


class Carbenz implements Cari,Owner {
	model : string ;
	color  : string ;
	newModel : boolean ;
	name :  string ;
	family : string ;
	constructor (model:string , color :  string , newModel :  boolean , name:  string , family : string){
		this.model = model
		this.color = color ;
		this.newModel = newModel;
		this.name = name;
		this.family = family
	}
	get CarInfo(){
		return this.name +  "_" + this.model + "_" +  this.color
	}
}

const benz30 = new Carbenz(
	"t30",
	"red",
	true,
	"ali",
	"zarei"
);

//in getter and setter we dont need to call and just by refrence is call 
console.log(benz30.CarInfo)
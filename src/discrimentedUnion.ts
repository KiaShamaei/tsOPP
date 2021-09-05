//for this must all obj have Identifier prop to verified it and act 

// interface Bird {
// 	type : string,
// 	Speed :  number 
// }
//  interface Horse {
// 	 type : string , 
// 	 Speed : number
//  }
 // in the above example type is Identifier prop
//  type Animal1 = Bird | Horse;
interface Animal {
		 type : string , 
		 Speed : number
	 }
 function moveAnimal(animal: Animal) {
	let speed;
	switch (animal.type) {
	  case 'bird':
		speed = animal.Speed;
		break;
	  case 'horse':
		speed = animal.Speed;
	}
	console.log('Moving at speed: ' + speed + animal.type);
  }
 class Egle implements Animal {
	 type = "bird";
	 Speed : number;

	 constructor(public a :  number){
		 this.Speed  = a

	 }
 }
 const egleAmerica = new Egle(4550)

 moveAnimal(egleAmerica)
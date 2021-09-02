class Car {
    private static instance: Car;
    private constructor(public name : string ,public model : string) {
        
        this.name = name ;
        this.model = model
    }
    static getinstance(name : string , model : string){
        if (this.instance){
            return this.instance
        }
        this.instance = new Car(name,model)
        return this.instance

    }
    
}

const benz = Car.getinstance("benz","360")
const bmw = Car.getinstance("bmw", "x3")
// just one object make from benze ......
console.log(benz,bmw)
 

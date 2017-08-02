class Devices {
	constructor(name,model,IMEI) {
		this.name = name;
		this.model = model;
		this.IMEI = IMEI;
	}

	input(input) {
      return input;
    }

	get make(){
		return this.name +' '+ this.model+' '+this.IMEI;
	}

	get browse(){
		return 'You can browse the internet';
	}
}
//Inheriting from the Devices Class///
class laptops extends Devices {
	constructor(name,model,IMEI) {
		super(name,model,IMEI);	
	}
	programming(language){
		return "writing "+language;
	}
	//polymorphism a method Used in Both subClasses also returns different outputs
	os(operatinsystem){
		return operatinsystem;
	}
}


class phones extends Devices {
	constructor(name,model,IMEI) {
		super(name,model,IMEI);
	}
	dial(person){
			return "calling "+ person;
	}
	//polymorphism a method Used in Both subClasses also returns different outputs
	os(operatinsystem){
		return operatinsystem;
	}
}

/// for phones 
const samsung = new phones('samsung','1820',1245);
samsung.make;
samsung.name;
samsung.browse;
samsung.dial('samuel');
samsung.os('Android');


/// for laptops
const toshiba = new laptops('Toshiba','1820',1245);
toshiba.make
toshiba.name;
toshiba.browse;
toshiba.programming('javascript');
toshiba.os('windows');

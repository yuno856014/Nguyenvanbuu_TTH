class Employee{
    name;
    age;
    address;
    salary;
    totalWorkingHours;
    constructor(name,age,address,salary){
        this.name = name;
        this.age = age;
        this.address = address;
        this.salary = salary;
    }
    inputWokingHours(){
        this.totalWorkingHours = +prompt("Hãy nhập số giờ làm việc")
    } 
    printInfo(){
        document.write(`Name: ${this.name}, Age: ${this.age}, Address: ${this.address}, Số giờ làm việc:${this.totalWorkingHours}`);  
    }
    calculatorBonus(){
        let bonus = 0;
        let hours = this.totalWorkingHours;
        if (hours >= 200){
            bonus = this.salary * 0.2;
        }
        else {
            if (hours >= 100){
                bonus = this.salary * 0.1
            }
        }
        document.write(`Tiền thưởng là :${bonus} <br>`)
    }
}


let duy = new Employee("duy",30,"42 Lê Lợi",6000000);
let hung = new Employee("hung",20,"9 Trần Nguyên Đán", 4200000);
let thanh = new Employee("thanh",25,"45 Vọng Trì", 3000000);

duy.inputWokingHours();
duy.printInfo();
duy.calculatorBonus();
hung.inputWokingHours();
hung.printInfo();
hung.calculatorBonus();
thanh.inputWokingHours();
thanh.printInfo();
thanh.calculatorBonus();
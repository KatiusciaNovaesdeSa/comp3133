class Car
{
    constructor(model , year){
        this.model = model;
        this.year = year;
    }

    toString(){
        
        return "Model: "+ `${this.model} - Engine:  ${this.year}`;
    }
}

    class Sedan extends Car{
        constructor(model , year , balance){

            super(model , year)
            this.balance = balance;
            
        }

        toString1()
        {
            return  `${this.model} has a balance of ${this.balance}`+ '.00';
        }
        
        }
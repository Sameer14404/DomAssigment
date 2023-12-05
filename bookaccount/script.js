function BankAccount(accountNumber, name, type,  balance){
    this.accuntNumber=accountNumber;
    this.name=name;
    this.type=type;
    this.balance=balance;

    this.deposit=function(amount){
this.balance+=amount
    };
    this.withdraw=function(amount){
        if(this.balance<amount){
            console.log("Not Sufficient balance")
        }
        else{
            this.balance=this.balance-amount
        }

    };
    this.checkBalance=function(){
        console.log(this.balance)
    };

}

let person1= new BankAccount("0987543628","sameer","saving",2000);
person1.checkBalance()
person1.withdraw(3000)
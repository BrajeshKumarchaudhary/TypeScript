class Demo {
    greet():void{
      console.log("Brajesh Kumar good morning!");
    }
    printNumber(range):void{
        for(var i=0;i<range;i++){
            console.log(i);
        }
    }
}
var obj=new Demo();
obj.greet();
obj.printNumber(10);
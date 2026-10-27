// static: we want same memory be used in all instance

class Counter{
    static count:number = 0; // make it fully static and accesible for all instance

    static increament(){
        return Counter.count = Counter.count +1
    }
    static decreament(){
        return Counter.count = Counter.count -1
    }
}

console.log(Counter.increament())
console.log(Counter.increament())
console.log(Counter.increament())
console.log(Counter.increament())
console.log(Counter.increament())
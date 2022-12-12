function defineReactive(data,key,val){
  
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            console.log("getter")
            return val;
        },
        set:function(newval){
           if(val===newval){
            return;
           }
           console.log("change");
           val = newval;
        }
    })
}

let Person = {
    name:'cjx',
    getName(){
        console.log("name getter");
        return this.name;
    },
    setName(newval){
        if(newval===this.name){
            return
        }
        this.name = newval;
    }
}
defineReactive(Person,'age',20);
console.log(Person.age)
Person.age = 21
console.log(Person.age)
console.log(Person.name)

console.log(Object.getOwnPropertyDescriptor(Person,'age'))
console.log(Object.getOwnPropertyDescriptor(Person,'name'))
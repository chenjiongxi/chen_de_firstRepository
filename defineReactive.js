import Dep from "./Dep";
import Observer from "./Observer";

function defineReactive(data,key,val){
    if(typeof val ==='object'){
        new Observer(val);
    }
    let dep = new Dep()
    Object.defineProperty(data,key,{
        enumerable:true,
        configurable:true,
        get:function(){
            dep.depend()
            return val;
        },
        set:function(newval){
           if(val===newval){
            return;
           }
           val = newval;
           dep.notify()
        }
    })
}

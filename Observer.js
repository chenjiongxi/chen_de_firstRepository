import defineReactive from './defineReactive'
export default class Observer {
    constructor(value){
        this.value = value
        if(!Array.isArray(value)){
            this.walk(value)
        }
    }
    //把传入的数据都添加上 getter 和 setter
    walk(obj){
        const keys = Object.keys(obj)
        for(let i =0;i<keys.length;i++){
            defineReactive(obj,keys[i],obj[keys[i]]);
        }
    }
}
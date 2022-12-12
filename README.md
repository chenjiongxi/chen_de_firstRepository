# chen_de_firstRepository
this is my first reposity 


# Data Observer,Dep,watcher 关系
    首先data创建的时候 就会用 Observer类 调用defineReactive方法将其设成响应式的data
    当vue创建组件或者模板的时候会实例化watcher watcher在实例化的时候会调用get 访问自己的数据 即自己的依赖 
    由于这些数据都是响应式的 调用的时候会调用数据的get函数 get函数会添加当前调用数据的对象（watcher）到dep 
    为了能在数据的get函数中添加watcher对象 watcher会先把自己设置到全局唯一指定的位置（例如window.target)然后读取数据
    触发数据的get函数 数据的get函数会从全局唯一的那个位置读取当前正在读取数据的watcher

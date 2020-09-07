const data = {
    name:"xjl",
    age:16,
}






function defineReactive(data,key,value){
    
   
    Object.defineProperty(data,key,{
        get(){
            console.log("读");
            return value;
        },
        set(val){
            console.log("写")
            value = val;
            if(value === val){
                return 
            }
        }
    })
}

// console.log(data.age);
// data.age = 12;
// console.log(data.age);

function observer(data){
    if(typeof data === 'object'){
        for(let key in data){
            defineReactive(data,key,data[key]);
         }
    }
    
}

observer(data);

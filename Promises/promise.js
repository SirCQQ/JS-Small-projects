function promise(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(promise1(a,b+1))
        }
        else{
            reject("The 'b' value is bigger than 'a'")
        }
    })

}
function promise1(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(promise2(a,b+1))
        }
        else{
            reject("The 'b' value is bigger than 'a'")
        }
    })

}
function promise2(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve(promise3(a,b+1))
        }
        else{
            reject("The 'b' value is bigger than 'a'")
        }
    })

}
function promise3(a,b){
    return new Promise((resolve,reject)=>{
        if(a>b){
            resolve({a,b})
        }
        else{
            reject("The 'b' value is bigger than 'a'")
        }
    })

}



promise(10,0)
.then(resp=>{
    console.log(resp);
    return promise1(resp.a,resp.b)
})
.then(resp=>{
    console.log(resp);
    return promise1(resp.a,resp.b)
})
.then(resp=>{
    console.log(resp);
    return promise1(resp.a,resp.b)
})
.then(resp=>{
    console.log(resp);
    return promise1(resp.a,resp.b)
})
.catch(err=>{
    console.log(err)
})
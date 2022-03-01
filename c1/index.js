const fs = require("fs");

console.log("hello world");

setTimeout(()=>{
    console.log("timeout");
},1000);

console.log("end");

const fn1 = (a, b ,cb)=>{
   let r =  cb(a + b);
   if(r) console.log(r);
};

fn1(3,6,(res)=>{
    console.log(res * 100);
});

fn1(3,6,(res)=>{
    return res *10;
});

//1 create empty funciton

const pr1 = ()=>{

};

//2-setup the promise return 

const pr2 = ()=>{
    return new Promise();
};

//3-assign the logic function
const pr3 = ()=>{
    return new Promise(()=>{

    });
};


//4- set the succes and fail (response and reject) callbacks
const pr4 = ()=>{
    return new Promise((succes, fail)=>{
    //your code goes here
    });
};

//5 finalize the function 
const pr5 = (a,b)=>{
    return new Promise((succes, fail)=>{
        let res = a * b;
        if(res>100 || res<0){
            return fail('Result out of range')
        };
        return succes(res);
    });
};

pr5(3,100)
.then(()=>{
  console.log(res);
})
.catch(err=>{
    console.log(err)
});


const fileWrite = (file, content)=>{
     return new Promise((succes, fail)=>{
        fs.writeFile(file, content, 'utf8', ()=>{
            if(err) return fail(err);
            return succes();
        });
     });
};

fileWrite("text.txt", "test generacija 16")
.then(()=>{
    console.log("succesifuly wrote the file")
}).catch(err =>{
    console.log(err);
});
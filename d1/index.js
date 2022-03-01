const fs = require ("fs");

const readFile = (file, 'utf8',(err, data)=>{
    return new Promise((succes,fail)=>{
        fs.readFile(file, err=>{
            if(err) return(fail);
            return succes();
        });
    });
} );

readFile("index.js")
.then(()=>{
    
})
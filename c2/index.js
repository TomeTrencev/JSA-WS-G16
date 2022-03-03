const fs = require('fs');

const readFile = ()=>{
     return new Promise ((succes,fail)=>{
          fs.readFile(file, 'utf8', (data,err)=>{
              if(err) return fail(err);
              let out = JSON.parse(data);
              return succes(out);
          });
     });
};
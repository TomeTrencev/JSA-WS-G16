const fs = require ("fs");


const fileWrite = (file, content) => {
    return new Promise((success, fail) => {
        fs.writeFile(file, content, 'utf8', err => {
            if(err) return fail(err);
            return success();
        });
    });
};

fileWrite('doc.txt', 'Document')
    .then(() => {
        console.log('File is written succesfully');
    }).catch(err => {
        console.log(err);
    });


const readFile = (file2) =>{
    return new Promise((succes,fail)=>{
        fs.readFile(file2, 'utf8', (data, err)=>{
            if(err) return(fail);
            return succes(data);
        });
    });
} ;

readFile("doc.txt")
.then((data)=>{
    console.log("the file is read !");
}).catch(err=>{
    console.log(err);
});


const fileappend = (file3, content)=>{
    return new Promise((succes, fail)=>{
        fs.appendFile(file3,content, 'utf8',err=>{
            if(err) return fail(err);
            return succes();
        });
    });
};

fileappend("dokument.txt", "Hello world")
     .then(()=>{
         console.log("The file is appended !");
     }).catch(err=>{
         console.log(err);
     });

     const renameFile = (oldFile, newFile) =>{
         new Promise((succes, fail)=>{
             fs.rename(oldFile, newFile, err=>{
                 if(err) return fail(err);
                 return succes ();
             });
         });
     };
     
     renameFile("doc.txt", "newDoc.txt")
     .then(()=>{
         console.log("file is renamed");
     }).catch(err=>{
         console.log(err);
     })

const deleteFile = (file4)=>{
    new Promise((succes, fail)=>{
        fs.unlink(file4, err=>{
            if(err) return fail(err);
            return succes();
        });
    });
} ;

deleteFile("dokument.txt")
.then(()=>{
    console.log("file is deleted!");
}).catch(err=>{
    console.log(err);
});



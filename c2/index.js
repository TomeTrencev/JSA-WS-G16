const fs = require('fs');
const express = require('express');

const readData = (source) => {
    return new Promise((success, fail) => {
        fs.readFile(`${source}.json`, 'utf8', (err, data) => {
            if(err) return fail(err);
            let out = JSON.parse(data);
            return success(out);
        });
    });
};

const writeData = (data, destination) => {
    return new Promise((success, fail) => {
        let out = JSON.stringify(data);
        fs.writeFile(`${destination}.json`, out, err => { // ./user.json
            if(err) return fail(err);
            return success();
        });
    });
};

const addPerson = async (firstName, lastName) => {
    try {
        let person = {
            first_name: firstName,
            last_name: lastName
        };
        let data = await readData('./data');
        data.push(person);
        await writeData(data, './data');
    } catch(err) {
        throw err;
    }
};

const updatePerson = async(index,{ firstName, lastName}) =>{
    let data = await readData('./data');

    try {
        let update = data.map((newPerson, index)=>{
            if(newPerson.index===index){
                return (index,{
                    firstName,
                    lastName,
                });
                  
                };
                return newPerson;
            });
            await writeData('./data', update);
    }     
        catch (err) {
           console.log(err);
        }
     };
const removePerson = async (index) => {
    try {
        let data = await readData('./data');
        let out = data.filter((_, i) => index !== i);
        await writeData(out, './data');
    } catch(err) {
        throw err;
    }
};




// (async () => {
//     try {
//         await writeData([], './data');

//         await addPerson('Pero', 'Perovski');
//         await addPerson('Ivan', 'Ivanovski');
//         await addPerson('Janko', 'Jankovski');
//         await addPerson('Stanko', 'Stankovski');

//         let data = await readData('./data');
//         console.log(data);

//         await removePerson(2);

//         let data2 = await readData('./data');
//         console.log(data2);
//     } catch(err) {
//         console.log(err);
//     }
// })();

//  object -> JSON.stringify(...) -> JSON (string)
// JSON (string) => JSON.parse(...) -> object

const api = express();

api.use(express.json());

api.get('/users', async (req, res) => {
    try {
        let data = await readData('./data');
        res.status(200).send(data);
    } catch(err) {
        console.log(err);
        res.status(500).send('Internal server error');
    }
});

api.post('/users', async (req, res) => {
    const {first_name, last_name}= req.body;

    if(!first_name || !last_name){
        return res.status(400).send("missing data!")
    }
    try {
       await addPerson(first_name,last_name);
       return res.status(201).send("Person is created");
    } catch (error) {
        console.log(err);
        return res.status(500).send('Person is not added');
    }
});

api.delete('/users/:index', async (req, res) => { // DELETE http://localhost:10000/users/3
    const {index} = req.body;

    if(!index){
        return res.status(400).send('missing data!');
    }

    try {
        await removePerson(index);
       return res.status(200).send("Person is deleted")
    } catch (error) {
        console.log(err);
        return res.status(500).send(err)
    }
});

api.put('/users/:index', async (req, res) => { // PUT http://localhost:10000/users/3
    const index = req.params.index;
    const{firstName, lastName}= req.body;

    if(!firstName || !lastName){
        return res.status(400).send("Missing data");
    }
    try {
        await updatePerson(index, {firstName,lastName});
        return res.status(200).send("Person updated");
    } catch (error) {
        console.log(err);
        res.status(500).send("Server error");
    }
});

api.listen(10000, err => {
    if(err) return console.log(err);
    console.log('Server successfully started on port 10000');
});
const express = require('express');
const app = express();
const cors = require('cors');
const port = 4000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello from Node tttttttt node mon')
});

const users = [
    { id: 0, name: 'shahana', email: 'shahara@gmail.com', phone: '01842155423' },
    { id: 1, name: 'tamim', email: 'tamim@gmail.com', phone: '01842155455' },
    { id: 2, name: 'asif', email: 'asif@gmail.com', phone: '018421554277' },
    { id: 3, name: 'sakib', email: 'sakib@gmail.com', phone: '01842155426' },
    { id: 4, name: 'susmita', email: 'masud@gmail.com', phone: '01842155563' }
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use querry parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    } else {
        res.send(users);
    }

});


// app.METHOD
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the Post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})





// dynamic api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
});

app.get('/users', (req, res) => {
    console.log(req.query.search);
    res.send(users);
})

app.get('/fruites/mango/fazli', (req, res) => {
    res.send('yammi yammi what a test');
})

app.listen(port, () => {
    console.log('listening to port', port);
});
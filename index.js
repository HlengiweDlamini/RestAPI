// app variable represents the api
const express = require('express');
const app = express();
const PORT = 8080

// tell express to apply/use middleware
app.use( express.json() )

// fire up api to listen on port and callback function to let us know server is up
app.listen(
    PORT,
    () => console.log(`It's alive on http://localhost;${PORT}`)
)


// handle request by passing callback function as 2nd argument
app.get('/dress', (req, res) => {
    // response back to client with status code and data payload
    res.status(200).send({
        dress: 'hi',
        size: 'small'
    })
});

// 2nd parameter for dynamic values of object(dress)
app.post('/dress/:id', (req, res) => { // post to create new data

    // id made available on request parameters object
    const { id } = req.params

    // name of dress located in request body
    const { name } = req.body

    // check we have name in request body
    if (!name) {
        res.status(418).send({message: 'We need a name!'})
    }
    
    res.send({
        dress: `hello with your ${name} and ID of ${id}`
    });
});

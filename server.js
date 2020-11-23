// dependencies

const express = require('express')

// the app runs on an express server
const app = express()

// if the get request for the home is good, send api is running
app.get('/', (req, res) => res.send('API Running'))

// names the port of either 5000 or whatever its running on
const PORT = process.env.Port || 5000

// if it finds that the server is running on the selected port let me know its good
app.listen(PORT, () => console.log(`Server started on Port ${PORT}`))

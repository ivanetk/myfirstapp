// Import packages
const express = require('express')
const morgan = require('morgan')

// Configure out port 
// analogy: Server - IP Address --> HDB Blk Number. 
// Made up of 4 octets. Each octet is 8 bit. Size of 8 bit is 255. (0-255)
// If the octet is signed, then (0-128) (+/-)

// Only programs that connect to the network will be assigned a port (32-bit) --> like HDB unit number.
// Port numbers - TCP or UDP.

// Convention: See if port is set in the environment variable. If not, set to default value
// NodeJS default: 3000

const port = process.env.PORT || 3000


// Create an instance of express application
const app = express()

// Log all requests
app.use(morgan('common'))


// GET /
app.get('/', (req, resp) => {


    // return HTML content
    resp.type('text/html')
    // set the status code
    resp.status(200)
    //send the response
    resp.send(`<h1>The time is now ${new Date()}</h1><img src="/static/dog.jpeg">`)
})

// Serve static resource
app.use("/static", express.static(__dirname + "/static"))

// Start our web application
app.listen(port, () => {
    console.info(`Starting application on port ${port} at ${new Date()}`)
})
console.info(`port = ${port}`)

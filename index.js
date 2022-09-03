const express = require('express')

const viewCount = require('./middleware/viewCount.js')
const userRoutes = require('./routes/v1/users.route.js')
const dbConnect = require('./utils/dbConnect')
const app = express()
const port = 5000


app.use(express.json())

dbConnect()
app.use("/api/v1/users", userRoutes)

app.get('/', (req, res) => {
    res.send('Hello World')
});

app.all("*", (req, res) => {
    res.send("NO route found.")
});
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
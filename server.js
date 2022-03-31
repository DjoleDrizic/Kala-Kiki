const express = require('express')
const app = express()

const options = {
    extensions: ['htm', 'html']
}
app.use(express.static('public', options))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('Online')
    console.log("Online");
})

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`))

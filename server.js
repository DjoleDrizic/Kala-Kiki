const express = require('express')
const app = express()
const mongoose = require('mongoose')

const options = {
    extensions: ['htm', 'html']
}
app.use(express.static('public', options))

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/posts', require('./routes/posts'))

mongoose.connect('mongodb+srv://vukradonjic:4529@cluster0.b5n76.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

const PORT = process.env.PORT || 8080
app.listen(PORT, console.log(`Server is running on http://localhost:${PORT}`))

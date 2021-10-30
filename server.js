const express = require('express');
const mongoose = require('mongoose');

const cors = require('cors');
const app = express();
require('dotenv').config();
app.use(cors());
app.use(express.json());

let URL = `mongodb+srv://${process.env.USER_NAME}:${process.env.PASSWORD}@sandbox.wrvbj.mongodb.net/${process.env.DB}?retryWrites=true&w=majority`;
mongoose.Promise = global.Promise;
mongoose
    .connect(URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('mongodb connected');
    })
    .catch((err) => {
        console.error('connection error', err);
        process.exit();
    });
app.get('/', (req, res) => {
    res.status(200).json({ success: true });
});

require('./routes/todo.routes')(app);
let PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});

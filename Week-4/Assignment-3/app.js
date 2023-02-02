const express = require('express')
const app = express();
const dotenv = require('dotenv').config()

app.get('/', async (req, res) => {  
    res.send('HI')
});


app.use((ree, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('Something broke!')
})

app.listen(3000, () => {
    console.log('The Website is running on local:3000')
 });  //端口號設置為3000
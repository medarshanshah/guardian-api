import express from 'express';
import axios from 'axios';

const app = express();
const cors = require('cors');
app.use(cors());

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/test', async (req, res) => {
    const data:object = await axios.get('https://content.guardianapis.com/search?q=debates&api-key=test')
    .then(response => {
        console.log("status ---->  ", response.status)
        console.log("response ---->  ",response)
        return response.data;
    })
    res.send(data);

})

app.listen(port, () => {
    console.log('listening to port: ',port);
});
import express from 'express';
import axios from 'axios';
import cors from 'cors';
import { guardianRoute } from './guardian';

const app = express();
app.use(cors());

const port = 3000;

app.use('/', guardianRoute, () => {

});

app.get('/test', async (req, res) => {
    const data:object = await axios.get('https://content.guardianapis.com/search?q=debates&api-key=test&format=json')
    .then(response => {
        console.log("status ---->  ", response.status);
        return response.data;
    })
    res.send(data);

})

app.listen(port, () => {
    console.log('listening to port: ',port);
});
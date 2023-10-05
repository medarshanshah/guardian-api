
import axios from 'axios';
import { Router } from 'express';

export const guardianRoute = Router();

export const homepage = async (result:object) => {
    try {
        return await axios.get('https://content.guardianapis.com/search?api-key=test&section=(world|sport|business|technology|politics)')
        .then(response => {
            console.log("homepage: status:: ",response.status);
            return response.data.response.results
        })
    } catch (error) {
        console.log(error);
    }
    
        
}

guardianRoute.get('/', (req, res) => {
    homepage((data) => {

        res.json(data);
    })
})

module.exports = {
    guardianRoute
}
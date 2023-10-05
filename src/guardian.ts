
import axios from 'axios';
import { Router } from 'express';

export const guardianRoute = Router();

export const homepage = () => {
    try {
        return axios.get('https://content.guardianapis.com/search?api-key=test&section=(world|sport|business|technology|politics)')
        .then(response => {
            console.log("homepage: status:: ",response.status);
            return response.data.response.results
        })
    } catch (error) {
        console.log(error);
    }
    
        
}


//Routes

//home
guardianRoute.get('/', (req, res) => {
    homepage().then(data => {
        res.json(data);
    })
})

//section
guardianRoute.get('/:sectionId', (req, res) => {

})

module.exports = {
    guardianRoute
}
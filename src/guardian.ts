
import axios from 'axios';
import { Router } from 'express';

export const guardianRoute = Router();

export const callGuardianAPI = (route_origin:string, api_url:string) => {
    try {
        return axios.get(api_url)
        .then(response => {
            console.log(route_origin,": status:: ",response.status);
            return response.data.response.results;
        })
    } catch (error) {
        console.log(error);
    }
}

// export const sections = () => {
//     try {
//         return axios.get('https://content.guardianapis.com/sections?api-key=test')
//         .then(response => {
//             console.log("sections: status::",response.status)
//             return response.data.response.results;
//         })
//     } catch (error) {
//         console.log(error);
//     }
// }


//Routes

//home
guardianRoute.get('/', (req, res) => {
    const home_url = 'https://content.guardianapis.com/search?api-key=test&section=(world|sport|business|technology|politics)';
    callGuardianAPI('homepage', home_url).then(data => {
        res.json(data);
    })
})

//section
guardianRoute.get('/section', (req, res) => {
    const section_url = 'https://content.guardianapis.com/sections?api-key=test';
    callGuardianAPI('section', section_url).then(data => {
        res.json(data);
    })
})

guardianRoute.get('/section/:sectionId', (req, res) => {
    console.log(req.params.sectionId)
    const sectionId = req.params.sectionId;
    const section_url = `https://content.guardianapis.com/${sectionId}?api-key=test`;
    callGuardianAPI('section', section_url).then(data => {
        res.json(data);
    })
})

module.exports = {
    guardianRoute
}
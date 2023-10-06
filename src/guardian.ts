
import axios from 'axios';
import { Router } from 'express';

export const guardianRoute = Router();

export const validator = (id:string) => {

    if(!id.includes('-')&&!id.includes('_')){
        return true;    //no splitted text: eg; books        
    }
    else if(id.includes('_')) {
        return false;   // not kebab case
    }
    else {
        const pattern = /(\w+)-(\w)([\w-]*)/;
        return pattern.test(id) && !id.includes('_');
    }
};

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
    callGuardianAPI('sections', section_url).then(data => {
        res.json(data);
    })
})

guardianRoute.get('/section/:sectionId', (req, res) => {
    const sectionId = req.params.sectionId;
    if(validator(sectionId)){
        const section_url = `https://content.guardianapis.com/${sectionId}?api-key=test`;
        callGuardianAPI('section', section_url).then(data => {
            res.json(data);
        })             
    }
})

//editions
guardianRoute.get('/edition', (req, res) => {
    const edition_url = 'https://content.guardianapis.com/editions?api-key=test';
    callGuardianAPI('editions', edition_url).then(data => {
        res.json(data);
    })
})

guardianRoute.get('/edition/:editionId', (req, res) => {
    const editionId = req.params.editionId;
    const edition_url = `https://content.guardianapis.com/editions?q=${editionId}&api-key=test`;
    callGuardianAPI('edition', edition_url).then(data => {
        res.json(data);
    })
})

//tags
guardianRoute.get('/tags', (req, res) => {
    const tag_url = 'https://content.guardianapis.com/tags?api-key=test';
    callGuardianAPI('tags', tag_url).then(data => {
        res.json(data);
    })
})

guardianRoute.get('/tags/:tagId', (req, res) => {
    const tagId = req.params.tagId;
    if(validator(tagId)){
        const tag_url = `https://content.guardianapis.com/tags?q=${tagId}&api-key=test`;
        callGuardianAPI('tag', tag_url).then(data => {
            res.json(data);
        })
    }
})

//search
guardianRoute.get('/search/:query', (req, res) => {
    const search_query = req.params.query;
    const search_url = `https://content.guardianapis.com/search?q=${search_query}&api-key=test&format=json`;
    callGuardianAPI('search', search_url).then(data => {
        res.json(data);
    })
})

//single item
guardianRoute.get('/article/:articleId', (req, res) => {
    const articleId = req.params.articleId;
    const article_url = `https://content.guardianapis.com/${articleId}?api-key=test`;
    callGuardianAPI('search', article_url).then(data => {
        res.json(data);
    })
})

module.exports = {
    guardianRoute,
    validator,
    callGuardianAPI
}
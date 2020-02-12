
var express = require('express');
var router = express.Router();




const todo = require('../models/todo');
const taskController = require ('../controllers')
// on crée une fonction qui répond aux requetes GET pointant sur la racine du site (/)
router.get('/', async (request, response) => {
    const todos = await todo.findAll({ raw: true });
    response.render('index.ejs', { todos });
}); 

router.post('/ajouter', async (request, response) => {
    const newTask = request.body.item;

    await taskController.addTask(newTask);

    response.redirect('/'); 
});

router.get('/supprimer/:id', async (request, response) => {
    const id = request.params.id;
    
    await taskController.removeTask(id);
    response.redirect('/');
});

router.get('/modifier/:id', async (request, response) => {
    const id = request.params.id;
    response.render('modifier.ejs', {id});
})

router.post('/modifier/:id', async (request, response) => {
    const newName = request.body.newName;
    const id = request.params.id;
await taskController.updateTask(newName,id);
    
    response.redirect('/');
})

// on crée une fonction qui gere les chemins non définis
router.use('*', (request, response) => {
    response
        .status(404)
        .render('error.ejs');
});

module.exports = router;


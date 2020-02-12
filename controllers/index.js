const uuid = require('uuid/v4');


const todo = require('../models/todo');


module.exports = {
    addTask: async (tasks) => {

        await todo.create({
            id: uuid(),
            name: tasks
        });
      
    }, 


    removeTask: async (id) => {

        await todo.destroy({
            where: {id:id}
        });
        
      
    }, 

    updateTask : async (task, id) => {
        await todo.update({name:task}, {where: {id:id}})
    }
    
   
  
  
  };
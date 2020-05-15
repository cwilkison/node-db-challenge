const db = require("../data/db-config");

module.exports = {
    getProjects,
    addProject,
    getResources,
    addResource,
    addTask,
    getTasks,
    getPR

};

//PROJECT CRUDS

function getProjects(){
    return db('projects')
}

function addProject(project){
    return db("projects")
    .insert(project, "id")
}

//RESOURCE CRUDS

function getResources(){
    return db("resources")
}



function addResource(resource){
    return db("resources")
    .insert(resource, "id")
}

//TASK CRUDS

function addTask(task){
    return db("tasks")
    .insert(task, "id")
}

function getTasks(id) {
    return db('tasks as t')
      .join('projects as p', 'p.id', 't.project_id')
      .select('*')
      .where('t.project_id', id)
      .orderBy('t.notes')
  }



  //PR CRUDS

  function getPR(){
      return db("project_resource")
  }
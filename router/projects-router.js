const express = require("express");

const Projects = require("./projects-model.js");

const router = express.Router();

//PROJECT CRUD CALLS

router.get("/", (req, res) => {
    Projects.getProjects()
      .then(project => {
        res.json(project);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get project" });
      });
  });

router.post("/", (req, res) => {
    const projectData = req.body;
  
    Projects.addProject(projectData)
      .then(project => {
        res.status(201).json({ created: project });
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to add Project" });
      });
  });

  //RESOURCE CRUD CALLS

  router.get("/resources", (req, res) => {
    Projects.getResources()
      .then(resource => {
        res.json(resource);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get resource" });
      });
  });

  router.post("/resources", (req, res) => {
    const resourceData = req.body;
  
    Projects.addResource(resourceData)
      .then(resource => {
        res.status(201).json({ created: resource });
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to add resource" });
      });
  });

// TASK CRUDS

router.post("/tasks", (req, res) => {
    const taskData = req.body;
  
    Projects.addTask(taskData)
      .then(task => {
        res.status(201).json({ created: task });
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to add Project" });
      });
  });

  router.get('/:id/tasks', (req, res) => {
    const id = req.params.id
    Projects.getTasks(id)
      .then((tasks) => {
        res.status(200).json(tasks);
      })
      .catch((error) => {
        res.status(500).json({ message: "Error finding tasks" });
      });
  });

  //PR CRUD
 
  router.get("/pr", (req, res) => {
    Projects.getPR()
      .then(pr => {
        res.json(pr);
      })
      .catch(err => {
        res.status(500).json({ message: "Failed to get pr" });
      });
  });



module.exports = router;
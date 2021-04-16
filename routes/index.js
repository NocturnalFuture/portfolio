// DB Import 
const Project = require("../models/Project")
const router = require("express").Router();


// Get all Projects

router.get('/projects', (req,res) => {
  Project.find().then(responsefromDB => {
    res.status(200).json(responsefromDB)
  }).catch(error => {
    console.log(error);
  })
})

router.post("/projects", (req, res, next) => {
  const { title, description } = req.body;
  Project.create({ title, description })
    .then(project => {
      // we return an http status code as well
      // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
      res.status(201).json(project)
    })
    .catch(err => {
      next(err)
    })
});


router.get("/projects/:id", (req,res,next) => {
  Project.findById(req.params.id).then(function(project){
    if(!project) {
      res.status(404).json(project)
    } else {
      res.status(200).json(project)
    }
  }).catch(error => {
      console.log(error)
  })
})


router.get("/", (req, res, next) => {
  res.json("All good in here");
});




// You put the next routes here 👇
// example: router.use("/auth", authRoutes)

module.exports = router;

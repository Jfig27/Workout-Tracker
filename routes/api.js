const router = require("express").Router();
const Workout = require("../models/index.js");

router.post("/api/Workout", ({ body }, res) => {
  Workout.create(body)
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/Workout/:id", (req, res) => {
  Workout.updateOne({ "_id": req.params.id }, {"$push": {exercises: req.body}})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/Workout", (req, res) => {
  Workout.find({})
    // .sort({ date: -1 })
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/Workout/range", (req, res) => {
    Workout.find(
        {
            day: 
            {
                $gte: new Date((new Date().getTime() - (8 * 24 * 60 * 60 * 1000)))
            }
        }
        ).sort({ "date": -1 }
    )
    .then((dbWorkout) => {
        res.json(dbWorkout);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})


module.exports = router;

var express = require('express');
var router = express.Router();

// Import the skills Controller:
const skillsCtrl = require('../controllers/skills');
const skills = require('../models/skills');

// get all the skills, show
router.get('/all', skillsCtrl.indexAll);

// Display an Add Skill link on the index view that when clicked, displays a new view that displays a form for entering a new Dev Skill.
router.get('/add', skillsCtrl.newSkill);


//When a new Dev Skill is submitted, the skill is added to the "database" and redirect the user to the index view.
router.post('/', skillsCtrl.createSkill);

//need help with this
router.get('/:id', skillsCtrl.show);

//On the show view, display a Delete Skill link that when clicked, deletes the skill from the "database" and redirects to the index view.
router.delete('/:id', skillsCtrl.deleteOne)


module.exports = router;

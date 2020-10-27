const skills = require('../models/skills');

function indexAll (req, res) {
    res.render('skills/all.ejs', {
    skills: skills.getAll()
  });
};


function show(req, res) {
    res.render('skills/show.ejs', {
      skill: skills.getOne(req.params.id)
    });
};


function newSkill(req, res) {
    res.render('skills/add');
};

function createSkill(req, res) {
    // The model is responsible for creating data
    skills.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect('/skills/all');
};

function deleteOne(req, res) {
    skills.deleteOne(req.params.id);
    res.redirect('/skills/all');
};

module.exports = {
    indexAll,
    newSkill,
    createSkill,
    show,
    deleteOne,
};


// data model for skills
const skills  = [
    {id: 1, skill: 'JavaScript', experience: "novice"},
    {id: 2, skill: 'HTML5', experience: "novice"},
    {id: 3, skill: 'CSS', experience: "novice"},
    {id: 4, skill: 'DOM', experience: "novice"},
    {id: 5, skill: 'jQuery', experience: "novice"},
    {id: 6, skill: 'Bootstrap', experience: "novice"},
    {id: 7, skill: 'Express js', experience: "novice"},
    {id: 8, skill: 'RESTful', experience: "novice"},
    {id: 9, skill: 'MERN', experience: "novice"},
    {id: 10, skill: 'Node js', experience: "novice"},
    {id: 11, skill: 'API', experience: "novice"},
    {id: 12, skill: 'oAuth', experience: "novice"},
    {id: 13, skill: 'Git Bash', experience: "novice"},
];

function create(skill) {
  // Add the id
  skill.id = Date.now() % 1000000;
  // New todos wouldn't be done :)
  skill.done = false;
  skills.push(skill);
};

function getAll() {
  return skills;
};

function getOne(id) {
  // Use the Array.prototype.find iterator method
  return skills.find(skills => skills.id === parseInt(id));
};

function deleteOne(id) {
  // Find the index based on the id of the todo object
  const idx = skills.findIndex(skills => skills.id === parseInt(id));
  skills.splice(idx, 1);
};

module.exports = {
  getAll,
  create,
  getOne,
  deleteOne,
};

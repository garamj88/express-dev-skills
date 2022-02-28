const skills = [
  {skill: 'MySQL', type: 'Database', level: 'intermediate', _id: 123456},
  {skill: 'HTML', type: 'Front end', level: 'beginner', _id: 123463},
  {skill: 'GIT', type: 'Version control', level: 'intermediate', _id: 123470},
  {skill: 'Node.js', type: 'Backend', level: 'beginner', _id: 123477},
  {skill: 'problem-solving', type: 'Soft skill', level: 'advanced', _id: 123484}
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) => {
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  // add id
  skill._id = Date.now() % 1000000
  skills.push(skill)
  skill.level
  skill.type
  return callback(null, skill)
}

export { 
	find,
  findById,
  create
}
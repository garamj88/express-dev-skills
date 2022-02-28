const skills = [
  {skill: 'MySQL', type: 'database', level: 'intermediate'},
  {skill: 'HTML', type: 'front end', level: 'beginner'},
  {skill: 'GIT', type: 'version control', level: 'intermediate'},
  {skill: 'Node.js', type: 'backend', level: 'beginner'},
  {skill: 'problem-solving', type: 'soft skill', level: 'advanced'}
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

export { 
	find
}
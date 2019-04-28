var faker = require('faker');

var generateBookId = function(userContext,events,done){

  var id = faker.random.number({min:1, max:10000000})
  userContext.vars.id = id

  // console.log('Randomly generated:', id)
  return done()
}

var randomStatus = function(userContext,events,done){

  var status = faker.random.arrayElement(['Read', 'Currently reading', 'Want to read','currently-reading-again'])
  // console.log(status)

  userContext.vars.status = status
  return done()
}

module.exports = ({
  generateBookId:generateBookId,
  randomStatus: randomStatus
})
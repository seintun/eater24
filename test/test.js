const chai = require('chai')
const expect = chai.expect
const config = require('../knexfile').test
const users = require('../src/models/users.model')

describe('TDD for eater24-BackEnd', () => {
  before(() => {
    const tmpConnection = require('knex')({
      client: 'pg',
      connection: config.connection
    })
    return tmpConnection
      .raw(`CREATE DATABASE ${config.connection.database};`)
      .catch(err => {
        Promise.resolve('Everything is OK')
      })
      .then(() => (global.knex = require('../src/queries/db')))
      .then(() => knex.migrate.rollback())
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  });

  describe('#fetchUsers()', () => {
    it('should check if the default total of seeded users are 5', async () => {
      const result = await users.fetchUsers()
      expect(result).to.be.an('array')
      expect(result.length).to.equal(5)
    })
    it('should contain id, userId, name, email', async () => {
      const result = await users.fetchUsers()
      expect(result[0]).to.contain.keys(
        'id',
        'userId',
        'name',
        'email'
      )
    })
    it('should check if the first user index belongs to Isabella', async () => {
      const result = await users.fetchUsers()
      expect(result[0].name).to.equal('Isabella')
    })
  });
  describe('#findUser()', () => {
    let result
    let user
    before( async() => {
      result = await users.findUser(1)
      user = result[0]
    })
    it('should only return 1 user', () => {
      expect(result.length).to.equal(1)
    })
    it('should check if the result is for Sein', () => {
      expect(user.name).to.equal('Sein')
    })
  });
  describe('#createUser()', () => {
    let dummyJSON = {
      "name":	"testName",
      "userId": "testId",
      "password": "test123",
      "email": "test@email.com"
    }
    let newUser
    before( async() => {
      await users.createUser(dummyJSON)
        .then(result => {
          newUser = result[0]
        })
    })
    it('should check if new req.body is inserted into the database by validating keys of automatically assigned id, userId, name, password, email', async () => {
      expect(newUser).to.contain.keys(
        'id',
        'userId',
        'name',
        'password',
        'email'
      )
    })
    it('should check if newly inserted data value match with req.body', () => {
      expect(newUser.name).to.equal(dummyJSON.name)
      expect(newUser.userId).to.equal(dummyJSON.userId)
      expect(newUser.password).to.equal(dummyJSON.password)
      expect(newUser.email).to.equal(dummyJSON.email)
    })
  });
})

const chai = require('chai')
const expect = chai.expect
const config = require('../knexfile').test
const users = require('../src/models/users.model')

describe('eater24-BackEnd', () => {
  before(() => {
    const tmpConnection = require('knex')({
      client: 'pg',
      connection: config.connection
    })
    return tmpConnection
      .raw(`CREATE DATABASE ${config.connection.database};`)
      .catch(err => {
        // console.log(err)
        Promise.resolve('Everything is OK')
      })
      .then(() => (global.knex = require('../src/queries/db')))
      .then(() => knex.migrate.rollback())
      .then(() => knex.migrate.latest(config))
      .then(() => knex.seed.run())
      .catch(() => console.log(`Migrations or seeds failed.`))
  })

  describe('#fetchUsers()', () => {
    it('should check if the total users are 5', async () => {
      const result = await users.fetchUsers()
      expect(result.length).to.equal(5)
    })
    it('should contain id, userId, name, email', async () => {
      const result = await users.fetchUsers()
      expect(result[0]).to.contain.keys('id','userId','name','email')
    })
    it('should check the first index belongs to Isabella', async () => {
      const result = await users.fetchUsers()
      expect(result[0].name).to.equal('Isabella')
    })
  })
  describe('#findUser()', () => {
    it('should check if input of id equals 1 exists for Sein', async () => {
      const result = await users.findUser(1)
      expect(result[0].name).to.equal('Sein')
    })
  })
})
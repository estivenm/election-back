// const request = require('supertest')
import supertest from 'supertest'
import { initApp } from '../src/app.js'
const { env } = require('../src/constants/constants')

let app, server, requestWithSupertest
const baseApi = '/api/v1/'

beforeEach(() => {
  app = initApp()
  server = app.listen(env.PORT_E2E)
  requestWithSupertest = supertest(app)
})

describe('test for app', () => {
  test('GET /api/v1/test', async () => {
    const response = await requestWithSupertest.get(`${baseApi}test`)
    expect(response.statusCode).toEqual(200)
    expect(response.body.message).toEqual('Test get successful')
    expect(response.headers['content-type']).toMatch(/json/)
  })
})

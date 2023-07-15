import supertest from 'supertest'
import { initApp } from '../../src/app'
import * as ServiceElection from '../../src/services/election.service'
import { env } from '../../src/utils/constants'

describe('Test for election', () => {
  let app, server, requestWithSupertest
  const baseApi = '/api/v1/elections'

  beforeAll(() => {
    app = initApp()
    server = app.listen(env.PORT)
    requestWithSupertest = supertest(app)
  })

  describe('GET election', () => {
    it('should get all elections', async () => {
      const { statusCode, body } = await requestWithSupertest.get(`${baseApi}`)
      expect(statusCode).toBe(200)
      expect(body.length).toBeGreaterThan(0)
    })

    it('should return an error if there is a server error', async () => {
      //Arrange
      const expectedError = 'Server error'
      jest
        .spyOn(ServiceElection, 'getAllElection')
        .mockRejectedValue(expectedError)
      //Active
      const response = await requestWithSupertest.get(`${baseApi}`)
      //Assert
      expect(response.status).toBe(500)
      expect(response.body).toEqual(expectedError)
    })

    it('should return 500 if there is a server error', async () => {
      //Arrange
      const expectedError = 'Server error'
      jest
        .spyOn(ServiceElection, 'getAllElection')
        .mockRejectedValue(expectedError)
      //Act
      const { statusCode, body } = await requestWithSupertest.get(`${baseApi}`)
      //Assert
      expect(statusCode).toBe(500)
      expect(body).toEqual(expectedError)
    })
  })

  describe('GET election by id', () => {
    it('should get election by id', async () => {
      //Arrange
      const electionId = '6499876c2c248386eab18d21'
      const url = `${baseApi}/${electionId}`
      //Active
      const { statusCode, body } = await requestWithSupertest.get(url)
      //Assert
      expect(statusCode).toBe(200)
      expect(body.id).toBe(electionId)
      expect(body.title).toBeTruthy()
    })

    it('should return 404 if the election with the specified id is not found', async () => {
      //Arrange
      const electionId = '6499876c2c248386eab18d2B'
      const url = `${baseApi}/${electionId}`
      const expectedResponse = { message: 'Election by id not found' }
      //Active
      const { statusCode, body } = await requestWithSupertest.get(url)
      //Assert
      expect(statusCode).toBe(404)
      expect(body).toEqual(expectedResponse)
    })

    it('should return 500 if there is a server error', async () => {
      //Arrange
      const url = `${baseApi}/6499876c2c248386eab18d2Bd`
      const expectedError = 'Server error'

      jest
        .spyOn(ServiceElection, 'getElectionById')
        .mockRejectedValue(expectedError)

      //Active
      const response = await requestWithSupertest.get(url)

      //Assert
      expect(response.status).toBe(500)
      expect(response.body).toEqual(expectedError)
    })
  })

  describe('POST election', () => {
    it('should create election', async () => {
      //Arrange
      const inputData = {
        title: 'Election for example 2050 test e2e',
        description: 'Election for example 2050 2e2'
      }

      const expectMessage = 'Election create successfully'
      //Act
      const { statusCode, body } = await requestWithSupertest
        .post(`${baseApi}`)
        .send(inputData)
      //Assert
      expect(statusCode).toBe(201)
      expect(body.message).toEqual(expectMessage)
    })

    it('should return 500 if there is a server error', async () => {
      //Arrange
      const inputData = {
        title: 'Election for example 2050 test e2e',
        description: 'Election for example 2050 2e2'
      }
      const expectedError = 'Server error'

      jest
        .spyOn(ServiceElection, 'createElection')
        .mockRejectedValue(expectedError)

      //Act
      const { statusCode, body } = await requestWithSupertest
        .post(`${baseApi}`)
        .send(inputData)
      //Assert
      expect(statusCode).toBe(500)
      expect(body).toEqual(expectedError)
    })
  })

  describe('PUT election', () => {
    it('should update election', async () => {
      //Arrange
      const electionId = '6499876c2c248386eab18d21'
      const url = `${baseApi}/${electionId}`
      const inputData = {
        title: 'Election for example 2050 test e2e',
        description: `Election for example 2050 2e2 update ${Date.now()}`
      }

      const expectedResponse = {
        message: 'Election updated successfully',
        modifiedCount: 1
      }
      //Act
      const { statusCode, body } = await requestWithSupertest
        .put(url)
        .send(inputData)
      //Assert
      expect(statusCode).toBe(200)
      expect(body).toEqual(expectedResponse)
    })

    it('should return 500 if there is a server error', async () => {
      //Arrange
      const electionId = '6499876c2c248386eab18d21'
      const url = `${baseApi}/${electionId}`
      const inputData = {
        title: 'Election for example 2050 test e2e',
        description: 'Election for example 2050 2e2'
      }
      const expectedError = 'Internal server error'

      jest
        .spyOn(ServiceElection, 'updateElection')
        .mockRejectedValue(expectedError)

      //Act
      const { statusCode, body } = await requestWithSupertest
        .put(url)
        .send(inputData)
      //Assert
      expect(statusCode).toBe(500)
      expect(body).toEqual(expectedError)
    })
  })

  afterAll(() => {
    server.close()
  })
})

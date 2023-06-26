import { schemaCreateElection } from '../../helpers/validation/election.validation.js'
import { validateRequest } from '../../helpers/validation/validation.js'
import * as ServiceElection from '../../services/election.service.js'
import {
  createRequestElectionForUpdate,
  mapperListElection
} from './election.builder.js'

const getElectionById = async (req, res) => {
  try {
    const electionId = req.params.id
    const result = await ServiceElection.getElectionById(electionId)
    if (!result) {
      const error = { message: 'Election by id not found' }
      return res.status(404).json(error)
    }
    return res.json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

const getAllElection = async (_, res) => {
  try {
    const result = await ServiceElection.getAllElection()
    if (result) {
      const newListElection = mapperListElection(result)
      return res.json(newListElection)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

const createElection = async (req, res) => {
  try {
    const request = req.body
    const errorValidation = validateRequest(request, schemaCreateElection())
    if (errorValidation) {
      return res.status(400).json({ error: errorValidation })
    }
    const result = await ServiceElection.createElection(request)
    if (result) {
      const { id } = result
      const response = { id, message: 'Election create successfully' }
      return res.status(201).json(response)
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

const updateElection = async (req, res) => {
  try {
    const requestElection = createRequestElectionForUpdate(req)
    const result = await ServiceElection.updateElection(requestElection)
    return res.json(result)
  } catch (error) {
    console.log(error)
    return res.status(500).json(error)
  }
}

export { getElectionById, createElection, getAllElection, updateElection }

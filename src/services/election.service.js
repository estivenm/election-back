import * as repositoryElection from '../repositories/election.repositorie.js'

const getElectionById = async (electionId) => {
  try {
    return await repositoryElection.getElectionById(electionId)
  } catch (error) {
    throw new Error(error)
  }
}

const getAllElection = async () => {
  try {
    return await repositoryElection.getAllElection()
  } catch (error) {
    throw new Error(error)
  }
}

const createElection = async (dataElection) => {
  try {
    const result = await repositoryElection.createElection(dataElection)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

const updateElection = async (dataElection) => {
  try {
    return await repositoryElection.updateElection(dataElection)
  } catch (error) {
    throw new Error(error)
  }
}
export { getElectionById, createElection, getAllElection, updateElection }

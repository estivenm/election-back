import ElectionModel from '../schemas/elections.schema'

const getElectionById = async (electionId) => {
  try {
    const query = { _id: electionId }
    const result = await ElectionModel.findById(query)
    return result
  } catch (error) {
    throw Error(error)
  }
}

const getAllElection = async () => {
  try {
    return await ElectionModel.find()
  } catch (error) {
    throw Error(error)
  }
}

const createElection = async (dataElection) => {
  try {
    const result = await ElectionModel(dataElection).save()
    return result
  } catch (error) {
    throw Error(error)
  }
}

const updateElection = async (dataElection) => {
  try {
    const query = { _id: dataElection.id }
    const updateData = { $set: dataElection }
    const message = 'Election updated successfully'

    const result = await ElectionModel.updateOne(query, updateData)
    return { message, modifiedCount: result.modifiedCount }
  } catch (error) {
    console.error('Error updating election:', error)
    throw Error(error)
  }
}

export { getElectionById, createElection, getAllElection, updateElection }

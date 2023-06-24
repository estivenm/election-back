const mapperElection = (election) => {
  const {
    _id: id,
    title,
    description,
    date,
    active,
    date_creation: dateCreation
  } = election
  return { id, title, description, date, active, dateCreation }
}

const mapperListElection = (elections) => {
  return elections.map(mapperElection)
}

const createRequestElectionForUpdate = (requestElection) => {
  const { id } = requestElection.params
  const { title, description, active } = requestElection.body
  return { id, title, description, active }
}

export { mapperElection, mapperListElection, createRequestElectionForUpdate }

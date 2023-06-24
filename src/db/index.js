import { connect } from 'mongoose'

const initMongoConnection = (uri) => {
  connect(uri)
    .then((db) => {
      console.log(
        'Connection established with the database',
        db.connections[0].name
      )
    })
    .catch((error) => {
      console.log(
        'An error occurred with the connection to the database',
        uri,
        error
      )
    })
}

export { initMongoConnection }

import express from 'express'
import { routeConfig } from './routes/route.js'
import { env } from './utils/constants.js'
import { initMongoConnection } from './db/index.js'

const initApp = () => {
  const app = express()
  app.use(express.json())
  routeConfig(app)
  initMongoConnection(env.MONGO_URI)
  return app
}

export { initApp }

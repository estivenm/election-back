import express from 'express'
import { routeConfig } from './routes/route.js'
import { swaggerDocs } from './doc/swagger.js'
import { env } from './constants/constants.js'
import { initMongoConnection } from './db/index.js'

const initApp = () => {
  const app = express()
  app.use(express.json())
  routeConfig(app)
  swaggerDocs(app)
  initMongoConnection(env.MONGO_URI)
  return app
}

export { initApp }

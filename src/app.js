import express from 'express'
import { routeConfig } from './routes/route.js'
import { swaggerDocs } from './doc/swagger.js'

const initApp = () => {
  const app = express()
  app.use(express.json())
  routeConfig(app)
  swaggerDocs(app)

  return app
}

export { initApp }

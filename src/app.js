import express from 'express'
import { routeConfig } from './routes/route'

const initApp = () => {
  const app = express()
  app.use(express.json())
  routeConfig(app)
  return app
}

export { initApp }

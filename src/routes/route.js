import { swaggerDocs } from '../doc/swagger.js'
import { env } from '../utils/constants.js'
import { electionRoutes } from './election.route.js'
const BASE_PATH = env.BASE_PATH

const routeConfig = (app) => {
  app.get('/', (req, res) => {
    res.send('¡Hi!')
  })
  app.use(`${BASE_PATH}/elections`, electionRoutes)
  app.use(`${BASE_PATH}/docs`, swaggerDocs)
}

export { routeConfig }

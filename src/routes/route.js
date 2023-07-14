import { swaggerDocs } from '../doc/swagger.js'
import { env } from '../utils/constants.js'
import { electionRoutes } from './election.route.js'
const BASE_PATH = env.BASE_PATH

const routeConfig = (app) => {
  app.use(`${BASE_PATH}/elections`, electionRoutes)
  app.use(`${BASE_PATH}/docs1`, swaggerDocs)
}

export { routeConfig }

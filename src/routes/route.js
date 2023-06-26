import { electionRoutes } from './election.route.js'
import { testRoutes } from './test.route.js'

const routeConfig = (app) => {
  app.use('/api/v1/elections', electionRoutes)
  app.use('/api/v1/test', testRoutes)
}

export { routeConfig }

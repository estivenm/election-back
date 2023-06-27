import { electionRoutes } from './election.route.js'

const routeConfig = (app) => {
  app.use('/api/v1/elections', electionRoutes)
}

export { routeConfig }

import { electionRoutes } from './election.route'

const routeConfig = (app) => {
  app.use('/api/v1/elections', electionRoutes)
}

export { routeConfig }

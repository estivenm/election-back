import { env } from '../constants/constants.js'
const devHost = `http://localhost:${env.PORT}`
const basePath = '/api/v1/'

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Election',
    version: '1.0.0',
    description: 'The API for the Election project'
  },
  servers: [
    {
      url: '{host}{basePath}',
      description: 'The Election API server v1.0.0 localhost',
      variables: {
        host: {
          default: devHost
        },
        basePath: {
          default: basePath
        }
      }
    }
  ]
}

// Paths to files containing OpenAPI definitions
const apis = ['./src/doc/**/*.yaml']

export { apis, swaggerDefinition }

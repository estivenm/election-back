import { env } from '../utils/constants.js'
const HOST_DEV = `http://localhost:${env.PORT}`
const BASE_PATH = env.BASE_PATH
const HOST_PDN = env.HOST_PDN

const swaggerDefinition = {
  openapi: '3.0.0',
  info: {
    title: 'API Election',
    version: '1.0.0',
    description: 'The API for the Election project'
  },
  servers: [
    {
      url: `${HOST_DEV}${BASE_PATH}`,
      description: 'localhost',
      variables: {
        host: { default: HOST_DEV },
        basePath: { default: BASE_PATH }
      }
    },
    {
      url: `${HOST_PDN}${BASE_PATH}`,
      description: 'PDN',
      variables: {
        host: { default: 'https://estivenm-election-back.onrender.com' },
        basePath: { default: BASE_PATH }
      }
    }
  ]
}

// Paths to files containing OpenAPI definitions
const apis = ['./src/doc/**/*.yaml']

export { apis, swaggerDefinition }

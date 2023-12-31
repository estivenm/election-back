import swaggerUI from 'swagger-ui-express'
import swaggerJsdoc from 'swagger-jsdoc'
import { apis, swaggerDefinition } from './config.js'

const options = { swaggerDefinition, apis }

// Doc in json format
const swaggerSpec = swaggerJsdoc(options)
const swaggerDocs = [swaggerUI.serve, swaggerUI.setup(swaggerSpec)]
export { swaggerDocs }

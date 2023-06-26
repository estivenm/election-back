import dotenv from 'dotenv'
dotenv.config({ path: '.env.dev' })
const ENV = process.env
const env = {
  PORT: process.env.PORT,
  PORT_E2E: process.env.PORT_E2E,
  MONGO_URI: ENV.MONGO_URI
}

export { env }

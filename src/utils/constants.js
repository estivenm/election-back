import dotenv from 'dotenv'
dotenv.config({ path: '.env.dev' })
const ENV = process.env
const env = {
  PORT: process.env.PORT,
  PORT_E2E: process.env.PORT_E2E,
  MONGO_URI: ENV.MONGO_URI,
  BASE_PATH: ENV.BASE_PATH || '/api/v1',
  HOST_PDN: ENV.HOST_PDN || 'https://estivenm-election-back.onrender.com'
}

export { env }

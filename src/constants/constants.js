import dotenv from 'dotenv'
dotenv.config({ path: '.env.dev' })
const ENV = process.env
const env = {
  PORT: process.env.PORT,
  MONGO_URI: ENV.MONGO_URI
}

export { env }

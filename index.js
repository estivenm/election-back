import { initMongoConnection } from './src/db/index'
import dotenv from 'dotenv'
import { initApp } from './src/app.js'
dotenv.config({ path: '.env.dev' })

const app = initApp()

app.listen(process.env.PORT, () => {
  initMongoConnection(process.env.MONGO_URI)
  console.log(`Server running on port ${process.env.PORT}`)
})

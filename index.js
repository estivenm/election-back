import { initApp } from './src/app.js'
import { env } from './src/constants/constants.js'
import { initMongoConnection } from './src/db/index.js'

const app = initApp()

app.listen(env.PORT, () => {
  initMongoConnection(env.MONGO_URI)
  console.log(`Server running on port ${env.PORT}`)
})

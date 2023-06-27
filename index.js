import { initApp } from './src/app.js'
import { env } from './src/constants/constants.js'
import { initMongoConnection } from './src/db/index.js'

const app = initApp()
// initMongoConnection(env.MONGO_URI)

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT}`)
})

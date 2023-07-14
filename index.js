import { initApp } from './src/app.js'
import { env } from './src/utils/constants.js'
const app = initApp()

app.listen(env.PORT, () => {
  console.log(`Server running on port ${env.PORT} 🚀 🚀 🚀 `)
})

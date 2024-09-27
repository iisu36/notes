import app from './app.js'
import config from './utils/config.js'
import logger from './utils/logger.js'
import ViteExpress from 'vite-express'

ViteExpress.listen(app, 3000, () => {
  logger.info(`Server running on port ${config.PORT}`)
})

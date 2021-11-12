import { createServer as createViteServer } from 'vite'

async function createServer() {
  const app = express()
  const vite = await createViteServer({
    server: { middlewareMode: 'ssr'}
  })
  app.use(vite.middlewares)
  app.use('*', async (req, res) => {

  })
  app.listen(3000)
}

createServer()
import fastify from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastify()

app.register(cors, {
  origin: true, // passar a url('endereco que chama', 'endereco da api')
})
app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('👨🏽‍🚀 HTTP Server running on http://localhost:3333')
  })

import express from 'express'

const app = express()
const port = 3000
import routes from './routes/index.js'

app.use(express.json())

app.use('/tasks', routes)

app.get('/', (req, res) =>{
    res.send("Bem vindo a minha API")
})

app.listen(port, () => {
    console.log(`Listening port ${port}...`)
})
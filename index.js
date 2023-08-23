
const express = require('express')
const mongoose = require('mongoose')
const Carros = require('./models/Carros.js')
const Motos = require('./models/Motos')

const app = express()


app.use(
    express.urlencoded({ extended: true}),
    express.json()
)


app.get('/', (req,res) => {
    res.json({message: 'RESPOSTA: FOI VIU'})
})

const nbCarros = require('./routes/CarrosRoutes.js')

const nbMotos = require('./routes/MotosRoutes.js')

app.use('/Carros',nbCarros)

app.use('/Motos',nbMotos)

// Disponibiliza o Servidor na porta 4000
app.listen(4000, () => {
    console.log('SERVIDOR TA CERTO em http://localhost:4000')
})


//conecta com o mongo atlas
mongoose.connect('mongodb+srv://teste:senha123@cluster0.xnxnvy7.mongodb.net/Carros?retryWrites=true&w=majority')

//conecta com a api com o MongoDB pela porta 5000
.then(() =>
    console.log('Conectado ao MongoDB'),
    //app.listen(4000)
)
.catch((err) => console.log(err))
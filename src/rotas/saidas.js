const { PresenterWEB } = require('../presenter/presenterWEB')
const { OperatorsDB } = require('../repositorio/bd/mongoAtlas/operacaoBD')
const { cadastrar, Cadastrar } = require('../usecase/cadastrar')
const { UpdateUserUseCase } = require('../usecase/UpdateUserUseCase')
const { excluir, Excluir } = require('../usecase/excluir')
const { listar, Listar } = require('../usecase/listar')



module.exports = app => {


    app.get('/saidas', function (req, res) {
        
       // res.send('Produtos cadastrados: ')
        const listar = new Listar(new PresenterWEB(res), new OperatorsDB())
        listar.findAll()
    })
    
    app.get('/saidas/:id', function (req, res) {
        res.send('Produtos cadastrados por ID: ')
        const listar = new Listar(new PresenterWEB(res), new OperatorsDB())
        listar.findById(req.params.id)
    })


    app.get('/saidas/name/:name', function (req, res) {
        res.send('Produtos cadastrados por Nome: ')
        const listar = new Listar(new PresenterWEB(res), new OperatorsDB())
        listar.findByName(req.params.name)
    })

    app.post('/saidas', function (req, res) {
        console.log('POST USER', (req.body))
        new Cadastrar(new PresenterWEB(res), new OperatorsDB(), req.body).execute()
    })


    app.put('/saidas/:id', function (req, res) {
        const updateUserUseCase = new UpdateUserUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute(req.params.id)
     
         })

    app.put('/saidas/:index', function (req, res) {
            const updateUserUseCase = new UpdateUserUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute(req.params.id)
         
             })
              
     app.delete('/saidas/:id', function (req, res) {
        const excluir = new Excluir(new PresenterWEB(res), new OperatorsDB())
        excluir.deleteById(req.params.id)
        

      
    })


}
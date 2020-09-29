class Cadastrar
{
    constructor( presenter, repository, userDTO, collection)
    {
        this.presenter = presenter
        this.repository = repository
        this.userDTO = userDTO
        this.collection = "producao"
      
        
    } 

    execute()
    {
        this.save(this.userDTO)        
    }

    async save(product)
    {
        try 
        {
            const newProduct = await this.repository.save(this.collection, product, this.userDTO)
            this.presenter.ok(newProduct)   
        } catch (fail)
        {
            console.log('Cadastrar.save', fail)    
        }
        
    }
}





module.exports = { Cadastrar }
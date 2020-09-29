class Excluir
    {
        constructor( presenter, repository)
        {
            this.presenter = presenter
            this.repository = repository
            this.collection = "producao"
            
        }
        
        async deleteById(productId)
        {
            try 
            {
                const del = await this.repository.deleteById(this.collection, productId)
                this.presenter.ok(del)   
            } catch (fail)
            {
                console.log('Excluir.Delete', JSON.stringify(fail))    
            }   
        }   

    }

    module.exports = {Excluir}
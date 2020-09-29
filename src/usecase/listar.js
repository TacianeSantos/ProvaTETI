class Listar
    {
        constructor( presenter, repository)
        {
            this.presenter = presenter
            this.repository = repository
            this.collection =  "producao"
          
        }
        
        async findAll()
        {
            try 
            {
                const allProduct = await this.repository.find(this.collection, {})
                this.presenter.ok(allProduct)   
            } catch (fail)
            {
                console.log('Listar.findAll', JSON.stringify(fail))    
            }   
        }    


        async findById()
        {
            try 
            {
                const prod = await this.repository.findById(this.collection, productId)
                this.presenter.ok(prod)   
            } catch (fail)
            {
                console.log('Listar.findById', JSON.stringify(fail))    
            }   
        }     

        async findByName(nameToFound){
            try {
                const user = await this.repository.find(this.collection, { name: nameToFound })
                console.log('name: ', nameToFound)
                this.presenter.ok(user)
            } catch (fail) {
                console.log('Listar.findByName', fail)
            }
        }
    }

    module.exports = { Listar }
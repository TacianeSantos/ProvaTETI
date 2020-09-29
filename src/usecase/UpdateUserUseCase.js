class UpdateUserUseCase
    {
        constructor( presenter, repository ,userDTO, collection)
        {
            this.presenter = presenter
            this.repository = repository
            this.userDTO = userDTO
            this.collection = "producao"
        }
       

    execute(userID) {
        this.UpdateUser(userID)
    }

        
        async UpdateUser(userID)
        {
            try 
            {
                const up = await this.repository.UpdateUser(this.collection, userID, this.userDTO)
                this.presenter.ok(up)   
            } catch (fail)
            {
                console.log('UpdateUserUseCase.UpdateUser', JSON.stringify(fail))    
            }   
        }   
 
    }   

    
    module.exports = {UpdateUserUseCase}
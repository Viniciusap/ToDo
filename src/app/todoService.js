const ToDos = '_ToDos'

export function ErrorValidation(errors){
    this.errors = errors
}

export default class toDoService{

    validation = (toDo) => {
        const errors = []

        if(!toDo.name){
            errors.push('O campo Nome é obrigatório')
        }
        if(!toDo.description){
            errors.push('O campo Descrição é obrigatório')
        }
        if(!toDo.date){
            errors.push('O campo Data é obrigatório')
        }
        if(!toDo.reminder){
            errors.push('O campo Lembrete é obrigatório')
        }
        if(toDo.reminder < new Date){
            errors.push('O campo Lembrete deve ser uma data futura')
        }

        if(errors.length > 0){
            throw new ErrorValidation(errors)
        }
    }

    getToDos = () => {
        const toDos = localStorage.getItem(ToDos)
        if(!toDos){
            return []
        }
        return JSON.parse(toDos)
    }

    getIndex = (id) => {
        let index = null;
        this.getToDos().forEach( (toDo, i) => {
            if(toDo.id == id){
                index = i;
            }
        })
        return index;
    }

    getByIndex = (id) => {
        let todoa = null;
        this.getToDos().forEach(toDo => {
            if(toDo.id == id){
                todoa = toDo;
            }
        })
        return todoa;
    }

    delete = (id) => {
        const index = this.getIndex(id);
        if(index !== null){
            const toDos = this.getToDos()
            toDos.splice(index, 1)
            localStorage.setItem(ToDos, JSON.stringify(toDos) )
            return toDos
        }
    }

    save = (toDo) => {
        this.validation(toDo)

        let toDos = localStorage.getItem(ToDos)

        if(!toDos){
            toDos = []
            toDo.id = 1;
        }
        else{
            const toDos2 = this.getToDos()
            debugger
            toDo.id = toDos2[toDos2.length-1].id + 1
            toDos = JSON.parse(toDos)
        }

        toDos.push(toDo);

        localStorage.setItem(ToDos, JSON.stringify(toDos))

    }
}
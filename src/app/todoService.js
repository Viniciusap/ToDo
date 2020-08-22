const ToDos = '_ToDos'

export default class toDoService{

    getToDos = () => {
        const toDos = localStorage.getItem(ToDos)
        return JSON.parse(toDos)
    }

    save = (toDo) => {
        let toDos = localStorage.getItem(ToDos)

        if(!toDos){
            toDos = []
        }
        else{
            toDos = JSON.parse(toDos)
        }

        toDos.push(toDo);

        localStorage.setItem(ToDos, JSON.stringify(toDos))

    }
}
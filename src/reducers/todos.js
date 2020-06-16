
const todos = (state = [], action) => {
    switch(action.type)
    {
    case 'ADD_TODO':
        return [
            ...state,
            {
                id: action.id,
                text: action.text,
                completed: false
            }            
        ]
    case 'TOGGLE_TODO':
        let obj = state.map(todo => 
            (todo.id === action.id)? {...todo, completed: !todo.completed} : todo
        )
        return obj;
    default:
        return state;
    }
}

export default todos;
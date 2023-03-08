//Action Type
const ADD_TODO = "ADD_TODO";
const DELETE_TODO = "DELETE_TODO";
const CHANGE_TODO = "CHANGE_TODO";

//Action Creator
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload }
}

export const delTodo = (payload) => {
    return { type: DELETE_TODO, payload }
}

export const chgTodo = (payload) => {
    return { type: CHANGE_TODO, payload }
}

//Init Value
const initialState = {
    todos: [
        {
            id: 1,
            title: "Learn React-Redux",
            content: "Learn React-Redux Data Flow",
            isDone: false,
        },
        {
            id: 2,
            title: "Learn Redux Toolkit",
            content: "Learn Redux Toolkit Specifically",
            isDone: false,
        },

    ],
}

//Reducer
const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        case DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter((el) => el.id !== action.payload.id),
            }

        case CHANGE_TODO:
            action.payload.isDone = !action.payload.isDone
            return {
                ...state,
                todos: [...state.todos],
            }

        default:
            return state;
    }
};

export default todosReducer;
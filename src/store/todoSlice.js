import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 't01', title: 'Learn React', completed: false },
    { id: 't02', title: 'Learn Redux', completed: true },
    { id: 't03', title: 'Learn React Native', completed: false },
    { id: 't04', title: 'Learn Async JavaScript', completed: true },
];

const todoSlice = createSlice({
    name: 'todos',
    initialState: initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: `t${Math.floor(Math.random() * 10000)}`,
                title: action.payload.title,
                completed: false,
            };
            state.unshift(newTodo);
        },
        toggleCompleteTodo: (state, action) => {
            const idxOfSelectedTodo = state.findIndex(
                (todo) => todo.id === action.payload.id
            );
            state[idxOfSelectedTodo].completed = action.payload.completed;
        },
        deleteTodo: (state, action) => {
            return state.filter((todo) => todo.id !== action.payload.id);
        },
        // todoFilter: (state, action) => {
        //     console.log(action.payload.filter);
        //     switch (action.payload.filter) {
        //         case 'completed':
        //             state.filteredTodos = state.todos.filter(
        //                 (todo) => todo.completed === true
        //             );
        //             break;
        //         case 'incomplete':
        //             state.filteredTodos = state.todos.filter(
        //                 (todo) => todo.completed === false
        //             );
        //             break;
        //         default:
        //             state.filteredTodos = state.todos;
        //             break;
        //     }
        // },
    },
});

export const { getTodos, addTodo, toggleCompleteTodo, deleteTodo, todoFilter } =
    todoSlice.actions;

export default todoSlice.reducer;

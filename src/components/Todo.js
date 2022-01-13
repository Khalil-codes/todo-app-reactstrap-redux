import React from 'react';
import { ListGroupItem } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { toggleCompleteTodo, deleteTodo } from '../store/todoSlice';
function Todo({ todo }) {
    const dispatch = useDispatch();
    const completeTodoHandler = () =>
        dispatch(
            toggleCompleteTodo({
                id: todo.id,
                completed: !todo.completed,
            })
        );
    const deleteTodoHandler = () =>
        dispatch(
            deleteTodo({
                id: todo.id,
            })
        );
    return (
        <ListGroupItem
            className={`d-flex justify-content-between ${
                todo.completed ? 'completed' : ''
            }`}>
            <div onClick={completeTodoHandler}>{todo.title}</div>
            <div>
                <button
                    className="btn-trash"
                    active={false}
                    onClick={deleteTodoHandler}>
                    <i className="fas fa-trash"></i>
                </button>
            </div>
        </ListGroupItem>
    );
}

export default Todo;

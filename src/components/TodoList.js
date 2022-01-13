import React from 'react';

import { ListGroup } from 'reactstrap';
import Todo from './Todo';

import { useSelector } from 'react-redux';

function TodoList(props) {
    let todos = useSelector((state) => state.items);

    return (
        <ListGroup>
            {/* // All Items */}
            {todos.length === 0 &&
            (props.status === 'all' ||
                props.status === 'completed' ||
                props.status === 'incomplete') ? (
                <h3 className="text-center">No Todos, Please Add One</h3>
            ) : null}
            {/* // All Items */}
            {todos.length > 0 && props.status === 'all'
                ? todos.map((todo, idx) => {
                      return <Todo key={idx} todo={todo} />;
                  })
                : null}
            {/* // Completed Items */}
            {todos.length > 0 && props.status === 'completed'
                ? todos.map((todo, idx) => {
                      return (
                          todo.completed === true && (
                              <Todo key={idx} todo={todo} />
                          )
                      );
                  })
                : null}
            {/* // Incomplete Items */}
            {todos.length > 0 && props.status === 'incomplete'
                ? todos.map((todo, idx) => {
                      return (
                          todo.completed === false && (
                              <Todo key={idx} todo={todo} />
                          )
                      );
                  })
                : null}
        </ListGroup>
    );
}

export default TodoList;

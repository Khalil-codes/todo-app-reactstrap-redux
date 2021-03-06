import React from 'react';
import { Input } from 'reactstrap';
const TodoFilter = (props) => {
    return (
        <Input
            onChange={(e) => {
                props.setStatus(e.target.value);
            }}
            type="select"
            name="select"
            className="mt-2">
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="incomplete">Incomplete</option>
        </Input>
    );
};

export default TodoFilter;

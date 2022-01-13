import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, InputGroup } from 'reactstrap';
import TodoFilter from './TodoFilter';
import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';

function InputForm(props) {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();

    const inputTextHandler = (e) => {
        setInputText(e.target.value);
    };
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (inputText.length === 0) return;
        dispatch(
            addTodo({
                title: inputText,
            })
        );
        setInputText('');
    };

    return (
        <Form onSubmit={addTodoHandler}>
            <FormGroup>
                <InputGroup>
                    <Input
                        placeholder="Enter your Task"
                        value={inputText}
                        onChange={inputTextHandler}
                        autoFocus={true}
                        required
                    />
                    <Button color="secondary" onClick={addTodoHandler}>
                        <i className="fas fa-plus"></i>
                    </Button>
                </InputGroup>
                <TodoFilter setStatus={props.setStatus}/>
            </FormGroup>
        </Form>
    );
}

export default InputForm;

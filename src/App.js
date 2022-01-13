import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'reactstrap';
import './App.css';

import InputForm from './components/InputForm';
import TodoList from './components/TodoList';

function App() {
    const [status, setStatus] = useState('all');
    return (
        <Container>
            <div className="content">
                <h2 className="mb-4">What do You Want to do Today?</h2>
                <InputForm setStatus={setStatus} />
                <hr />
                <TodoList status={status} />
            </div>
        </Container>
    );
}

export default App;

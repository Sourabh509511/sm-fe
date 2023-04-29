import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Assets/Styles/_colors.css';
import IndexRouter from './routes/Routes';

function App () {
    return (
        <div className="App">
            <BrowserRouter basename="/sm-fe">
                <IndexRouter />
            </BrowserRouter>
        </div>
    );
}

export default App;

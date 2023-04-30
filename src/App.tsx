import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import './Assets/Styles/_colors.css';
import IndexRouter from './routes/Routes';
import Loading from 'views/No Data/Loading';
import { useTypedSelector } from 'utils';

function App () {
    const isLoading = useTypedSelector(store => store.loading.loading);

    return (
        <div className="App">
            <BrowserRouter basename="/sm-fe">
                {isLoading ? <Loading /> : <IndexRouter />}
            </BrowserRouter>
        </div>
    );
}

export default App;

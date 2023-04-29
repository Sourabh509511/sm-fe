import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from '@redux-devtools/extension';
import { Reducers as reducers } from './reducers/reducers';
import * as config from 'config';

const configureStore = () => {
    const middleware = applyMiddleware(thunk);

    return createStore(
        reducers(),
        config.IS_REDUX_ENABLED ? composeWithDevTools(middleware) : middleware
    );
};

const store = configureStore();
export default store;

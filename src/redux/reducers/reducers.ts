import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import CategoryReducer from './CategoryReducer';
import ProductReducer from './ProductReducer';
import UserReducer from './UserReducer';
import { IInitialState as ICategoryReducerState } from './CategoryReducer';
import { IInitialState as IProductReducerState } from './ProductReducer';
import { IInitialState as IUserReducerState } from './UserReducer';

export interface IReducerState {
    category: ICategoryReducerState;
    product: IProductReducerState;
    user: IUserReducerState;
}

export const Reducers = () =>
    combineReducers<IReducerState>({
        category: CategoryReducer,
        product: ProductReducer,
        user: UserReducer,
    });

export type ThunkActionType<T = string> = ThunkAction<
    void,
    IReducerState,
    unknown,
    Action<T | string>
>;

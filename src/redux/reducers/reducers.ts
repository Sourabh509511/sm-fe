import { Action, combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk';
import CategoryReducer, {
    IInitialState as ICategoryReducerState,
} from './CategoryReducer';
import ProductReducer, {
    IInitialState as IProductReducerState,
} from './ProductReducer';
import UserReducer, { IInitialState as IUserReducerState } from './UserReducer';
import LoadingReducer, {
    IInitialState as ILoadingReducerState,
} from './LoadingReducer';

export interface IReducerState {
    category: ICategoryReducerState;
    product: IProductReducerState;
    user: IUserReducerState;
    loading: ILoadingReducerState;
}

export const Reducers = () =>
    combineReducers<IReducerState>({
        category: CategoryReducer,
        product: ProductReducer,
        user: UserReducer,
        loading: LoadingReducer,
    });

export type ThunkActionType<T = string> = ThunkAction<
    void,
    IReducerState,
    unknown,
    Action<T | string>
>;

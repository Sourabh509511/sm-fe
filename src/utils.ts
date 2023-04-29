/* eslint-disable @typescript-eslint/no-restricted-imports */
import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { IReducerState } from 'redux/reducers/reducers';

export const useTypedSelector: TypedUseSelectorHook<IReducerState> =
    useSelector;

export const getStatusAndDataFromPromise = async (response: Response) => {
    const statusCode = response.status;
    const data = await response.json();
    return {
        statusCode,
        data,
    };
};

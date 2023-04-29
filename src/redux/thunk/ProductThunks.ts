import { SUCCESS_STATUS } from 'Constant';
import { getProductData } from 'api/api';
import { setProductDataInStore } from 'redux/actions/ProductActions';
import { ThunkActionType } from 'redux/reducers/reducers';
import { getStatusAndDataFromPromise } from 'utils';

export const getProductDataThunk = (searchQuery?: string): ThunkActionType => {
    return async dispatch => {
        const response = await getProductData(searchQuery ?? '');
        const { statusCode, data } = await getStatusAndDataFromPromise(
            response
        );
        if (statusCode === SUCCESS_STATUS) {
            dispatch(setProductDataInStore(data));
        }
    };
};

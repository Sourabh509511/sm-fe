import { SUCCESS_STATUS } from 'Constant';
import { getCategoryData } from 'api/api';
import { setCategoryDataInStore } from 'redux/actions/categoryActions';
import { ThunkActionType } from 'redux/reducers/reducers';
import { getStatusAndDataFromPromise } from 'utils';

export const getCategoryDataThunk = (searchQuery?: string): ThunkActionType => {
    return async dispatch => {
        const response = await getCategoryData(searchQuery ?? '');
        const { statusCode, data } = await getStatusAndDataFromPromise(
            response
        );
        if (statusCode === SUCCESS_STATUS) {
            dispatch(setCategoryDataInStore(data));
        }
    };
};

import { SUCCESS_STATUS } from 'Constant';
import { login } from 'api/api';
import { setUserDataInStore } from 'redux/actions/userActions';
import { ThunkActionType } from 'redux/reducers/reducers';
import { getStatusAndDataFromPromise } from 'utils';

export const loginUser = (
    username: string,
    password: string
): ThunkActionType => {
    return async dispatch => {
        const response = await login(username, password);
        const { statusCode, data } = await getStatusAndDataFromPromise(
            response
        );
        if (statusCode === SUCCESS_STATUS) {
            dispatch(setUserDataInStore(data));
        }
        return statusCode
    };
};

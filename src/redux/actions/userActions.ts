import { IInitialState, UserEnum } from 'redux/reducers/UserReducer';

export const setUserDataInStore = (data: IInitialState) => ({
    type: UserEnum.SetUserData,
    data,
});

export const removeUserDataInStore = () => ({ type: UserEnum.UnsetUserData });

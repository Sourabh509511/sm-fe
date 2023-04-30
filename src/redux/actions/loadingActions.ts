import { LoadingEnum } from 'redux/reducers/LoadingReducer';

export const setLoading = () => ({ type: LoadingEnum.SetLoading });

export const unsetLoading = () => ({ type: LoadingEnum.UnsetLoading });

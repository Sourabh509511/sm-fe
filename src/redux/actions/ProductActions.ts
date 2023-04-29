import {
    ProductActionEnum,
    IInitialState,
} from 'redux/reducers/ProductReducer';

export const setProductDataInStore = (data: IInitialState['products']) => ({
    type: ProductActionEnum.SetProduct,
    data,
});

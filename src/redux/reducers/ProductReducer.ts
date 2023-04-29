export interface IProduct {
    id: string;
    company: string;
    brand: string;
    name: string;
    image: string;
    short_desc: string;
    long_desc: string;
    mrp: number;
    price: number;
    margin: number;
    rating: string;
    weight: number;
    unit: string;
    category: number;
    category_name: string;
    is_discount: boolean;
    discount_amt: number;
}

export interface IInitialState {
    products: Array<IProduct>;
}

export enum ProductActionEnum {
    SetProduct = 'SetProduct',
    ResetProduct = 'ResetProduct',
}

type ProductActionType =
    | {
          type: ProductActionEnum.SetProduct;
          data: IInitialState['products'];
      }
    | {
          type: ProductActionEnum.ResetProduct;
      };

// const PRODUCT = Object.freeze({
//     id: '',
//     company: '',
//     brand: '',
//     name: '',
//     image: '',
//     short_desc: '',
//     long_desc: '',
//     mrp: 0,
//     price: 0,
//     margin: 0,
//     rating: '',
//     weight: 0,
//     unit: '',
//     category: 0,
//     category_name: '',
//     is_discount: false,
//     discount_amt: 0,
// });

const initialState: IInitialState = {
    products: [],
};

function ProductReducer (
    state: IInitialState = initialState,
    action: ProductActionType
): IInitialState {
    switch (action.type) {
        case ProductActionEnum.SetProduct:
            return {
                ...state,
                products: action.data,
            };
        case ProductActionEnum.ResetProduct:
            return {
                products: [],
            };
        default:
            return state;
    }
}

export default ProductReducer;

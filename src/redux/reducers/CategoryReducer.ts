export interface IInitialState {
    categories: Array<{
        id: string;
        name: string;
        image: string;
    }>;
    activeCategory: string;
}

export enum CategoryActionEnum {
    SetCategory = 'SetCategory',
    SetActiveCategory = 'SetActiveCategory',
    ResetCategory = 'ResetCategory',
}

type CategoryActionType =
    | {
          type: CategoryActionEnum.SetCategory;
          data: IInitialState['categories'];
      }
    | {
          type: CategoryActionEnum.SetActiveCategory;
          category_id: string;
      }
    | {
          type: CategoryActionEnum.ResetCategory;
      };

const initialState: IInitialState = {
    categories: [],
    activeCategory: '',
};

function CategoryReducer (
    state: IInitialState = initialState,
    action: CategoryActionType
): IInitialState {
    switch (action.type) {
        case CategoryActionEnum.SetCategory:
            return {
                ...state,
                categories: action.data,
            };
        case CategoryActionEnum.SetActiveCategory:
            return {
                ...state,
                activeCategory: action.category_id,
            };
        case CategoryActionEnum.ResetCategory:
            return {
                ...initialState,
            };
        default:
            return state;
    }
}

export default CategoryReducer;

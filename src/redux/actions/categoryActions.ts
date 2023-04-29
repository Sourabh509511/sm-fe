import {
    CategoryActionEnum,
    IInitialState,
} from 'redux/reducers/CategoryReducer';

export const setCategoryDataInStore = (data: IInitialState['categories']) => ({
    type: CategoryActionEnum.SetCategory,
    data,
});

export const setActiveCategoryInStore = (
    categoryId: IInitialState['activeCategory']
) => ({
    type: CategoryActionEnum.SetActiveCategory,
    category_id: categoryId,
});

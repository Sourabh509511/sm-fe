import React from 'react';
import DefaultCategory from 'Assets/Icons/default_category.svg';
import Card, { UrlEnum } from 'Components/Card';
import { useTypedSelector } from 'utils';
import { getProductDataThunk } from 'redux/thunk/ProductThunks';
import { useDispatch } from 'react-redux';
import { setActiveCategoryInStore } from 'redux/actions/categoryActions';
import NoCategory from 'views/No Data/NoCategory';

const Category = () => {
    const category = useTypedSelector(store => store.category);
    const activeCategory = category.activeCategory;
    const dispatch = useDispatch<any>();
    const user = useTypedSelector(store => store.user);

    const onCategoryClick = (id: string) => {
        dispatch(getProductDataThunk(`?category=${id}`));
        dispatch(setActiveCategoryInStore(id));
    };

    return category.categories ? (
        <div
            className="d-flex overflow-x-scroll wrapper"
            style={{ width: '100vw' }}
        >
            <div className="d-flex" style={{ gap: '16px' }}>
                {category.categories.map(cat => (
                    <Card
                        key={cat.id}
                        id={cat.id}
                        type={UrlEnum.Category}
                        image={cat.image ? cat.image : DefaultCategory}
                        name={cat.name}
                        height={194}
                        width={160}
                        imageHeight={'68%'}
                        imageWidth={'100%'}
                        fontSize={'18px'}
                        onClick={onCategoryClick}
                        highlight={activeCategory === cat.id}
                        isEditIcon={user.is_admin}
                        nameStyles={{
                            fontWeight: '600',
                            fontSize: '18px',
                            lineHeight: '22px',
                        }}
                    />
                ))}
            </div>
        </div>
    ) : (
        <NoCategory />
    );
};

export default Category;

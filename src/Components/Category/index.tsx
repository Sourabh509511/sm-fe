import React from 'react';
import DefaultCategory from 'Assets/Icons/default_category.svg';
import Card, { UrlEnum } from 'Components/Card';
import { useTypedSelector } from 'utils';
import { getProductDataThunk } from 'redux/thunk/ProductThunks';
import { useDispatch } from 'react-redux';
import { setActiveCategoryInStore } from 'redux/actions/categoryActions';

const Category = () => {
    const category = useTypedSelector(store => store.category);
    const activeCategory = category.activeCategory;
    const dispatch = useDispatch<any>();

    const onCategoryClick = (id: string) => {
        dispatch(getProductDataThunk(`?category=${id}`));
        dispatch(setActiveCategoryInStore(id));
    };

    return (
        <div className="d-flex overflow-x-scroll wrapper">
            <div className="d-flex" style={{ gap: '16px', width: '100vw' }}>
                {category.categories.map(cat => (
                    <Card
                        key={cat.id}
                        id={cat.id}
                        type={UrlEnum.Category}
                        image={cat.image ? cat.image : DefaultCategory}
                        name={cat.name}
                        height={194}
                        width={260}
                        imageHeight={'68%'}
                        imageWidth={'100%'}
                        fontSize={'18px'}
                        onClick={onCategoryClick}
                        highlight={activeCategory === cat.id}
                        isEditIcon
                        nameStyles={{
                            fontWeight: '600',
                            fontSize: '18px',
                            lineHeight: '22px',
                        }}
                    />
                ))}
            </div>
        </div>
    );
};

export default Category;

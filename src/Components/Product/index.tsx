import React from 'react';
import Card, { UrlEnum } from 'Components/Card';
import DefaultCategory from 'Assets/Icons/default_category.svg';
import { useTypedSelector } from 'utils';
import { IProduct } from 'redux/reducers/ProductReducer';
import * as Styles from './styles';

const ProductDetails = (product: IProduct) => {
    return (
        <>
            <Styles.CategoryName>{product.category_name}</Styles.CategoryName>
            <div className="center" style={{ gap: '2px' }}>
                <Styles.Rate>₹{product.price}</Styles.Rate>
                <Styles.Price>₹{product.mrp}</Styles.Price>
            </div>
        </>
    );
};

const Product = () => {
    const product = useTypedSelector(store => store.product);

    return (
        <div className="d-flex" style={{ gap: '8px', flexWrap: 'wrap' }}>
            {product.products.map((prod: IProduct) => (
                <Card
                    key={prod.id}
                    id={prod.id}
                    type={UrlEnum.Product}
                    image={prod.image ? prod.image : DefaultCategory}
                    name={prod.name}
                    height={302}
                    width={228}
                    imageHeight={'60%'}
                    imageWidth={'100%'}
                    isEditIcon
                    nameStyles={{
                        fontWeight: '600',
                        fontSize: '16px',
                        lineHeight: '20px',
                    }}
                >
                    <ProductDetails {...prod} />
                </Card>
            ))}
        </div>
    );
};

export default Product;

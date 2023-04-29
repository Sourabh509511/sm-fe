import React from 'react';
import Category from 'Components/Category';
import Product from 'Components/Product';
import { useListPage } from './helperHooks';
import * as Styles from './styles';

const ListPage = () => {
    useListPage();
    return (
        <Styles.Wrapper className="d-flex flex-column">
            <Styles.CategoryWrapper>
                <Styles.HeaderText>Explore Categories</Styles.HeaderText>
                <Category />
            </Styles.CategoryWrapper>
            <Styles.CategoryWrapper>
                <Styles.HeaderText>Featured Products</Styles.HeaderText>
                <Product />
            </Styles.CategoryWrapper>
        </Styles.Wrapper>
    );
};

export default ListPage;

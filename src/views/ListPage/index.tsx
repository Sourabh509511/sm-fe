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
                <div
                    className="space-between cursor-pointer"
                    onClick={() => {}}
                >
                    <Styles.HeaderText>Explore Categories</Styles.HeaderText>
                    <div>see more</div>
                </div>
                <Category />
            </Styles.CategoryWrapper>
            <Styles.CategoryWrapper>
                <div
                    className="space-between cursor-pointer"
                    onClick={() => {}}
                >
                    <Styles.HeaderText>Featured Products</Styles.HeaderText>
                    <div>see more</div>
                </div>
                <Product />
            </Styles.CategoryWrapper>
        </Styles.Wrapper>
    );
};

export default ListPage;

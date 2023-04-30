import React, { useState } from 'react';
import { SearchInput } from './styles';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdOutlineCancel } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { getCategoryDataThunk } from 'redux/thunk/CategoryThunk';
import { getProductDataThunk } from 'redux/thunk/ProductThunks';
import * as Styles from './styles';

const Searchbar = () => {
    const [searchText, setSearchText] = useState<string>('');
    const dispatch = useDispatch<any>();
    function onSearchHandler () {
        let query = '';
        if (searchText) {
            query = `?search=${searchText}`;
        }
        dispatch(getCategoryDataThunk(query));
        dispatch(getProductDataThunk(query));
    }
    return (
        <Styles.Wrapper className="center">
            <div className="center w-100" style={{ position: 'relative' }}>
                <SearchInput
                    placeholder="Search for items..."
                    value={searchText}
                    onChange={e => setSearchText(e.currentTarget.value)}
                />
                {searchText && (
                    <MdOutlineCancel
                        onClick={() => setSearchText('')}
                        className="cursor-pointer cross-icon"
                        color="var(--base-green)"
                    />
                )}
            </div>
            <div className="search-icon center">
                <AiOutlineSearch
                    onClick={() => onSearchHandler()}
                    className="cursor-pointer"
                    color="white"
                />
            </div>
        </Styles.Wrapper>
    );
};

export default Searchbar;

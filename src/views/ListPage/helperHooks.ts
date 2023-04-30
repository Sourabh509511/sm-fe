import { useDispatch } from 'react-redux';
import { setLoading, unsetLoading } from 'redux/actions/loadingActions';
import { getCategoryDataThunk } from 'redux/thunk/CategoryThunk';
import { getProductDataThunk } from 'redux/thunk/ProductThunks';

export function useListPage () {
    const dispatch = useDispatch<any>();
    dispatch(setLoading());
    dispatch(getCategoryDataThunk());
    dispatch(getProductDataThunk());
    dispatch(unsetLoading());
}

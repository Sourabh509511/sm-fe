import { ListCategory, ListProducts, Login } from 'urls';
import { callApi } from './services';

export function getCategoryData (searchQuery?: string) {
    return callApi('get', `${ListCategory}${searchQuery}`);
}

export function getProductData (searchQuery?: string) {
    return callApi('get', `${ListProducts}${searchQuery}`);
}

export function login (username: string, password: string) {
    return callApi('post', Login, { Username: username, password });
}

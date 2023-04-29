const ProductsBaseUrl = 'api/products/';

export const ListProducts = ProductsBaseUrl;
export const CreateProducts = `${ProductsBaseUrl}create/`;
export const UpdateProducts = `${ProductsBaseUrl}update/`;

const CategoryUrl = `${ProductsBaseUrl}category/`;

export const ListCategory = CategoryUrl;
export const CreateCategory = `${CategoryUrl}create/`;
export const UpdateCategory = `${CategoryUrl}update/`;

const AuthBaseUrl = 'auth/';

export const Login = `${AuthBaseUrl}login/`;

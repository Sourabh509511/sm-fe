export const SIDEBAR_CONTENT = ['Dashboard'];
export const SUCCESS_STATUS = 200;

export type LocalStorageKeyType = 'token';

export const LOCAL_STORAGE_KEYS: Record<LocalStorageKeyType, string> =
    Object.freeze({
        token: '',
    });
export enum LocationEnum {
    Home = '',
    About = 'about',
    ContactUs = 'contact-us',
}

export const PADDING = '60px';

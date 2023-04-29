import { LOCAL_STORAGE_KEYS, LocalStorageKeyType } from 'Constant';

export function getFromStorage (key: LocalStorageKeyType): string | null {
    return localStorage.getItem(LOCAL_STORAGE_KEYS[key]);
}

export function setInStorage (key: LocalStorageKeyType, value: string) {
    localStorage.setItem(LOCAL_STORAGE_KEYS[key], value);
}

export function removeItemFromStorage (key: LocalStorageKeyType) {
    localStorage.removeItem(LOCAL_STORAGE_KEYS[key]);
}

export function clearStorages () {
    const keys = Object.keys(LOCAL_STORAGE_KEYS) as Array<LocalStorageKeyType>;
    keys.forEach((keyName: LocalStorageKeyType) => {
        // if (!KEYS_TO_NOT_CLEAR.includes(keyName)) {
        removeItemFromStorage(keyName);
        // }
    });
}

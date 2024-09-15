import HttpClient from './client';
import * as config from 'config';

function getAuthToken () {
    return localStorage.getItem('access');
}

interface ICallApiArgs<T> {
    method: RequestInit['method'];
    endPoint: string;
    data?: T;
    tokenToUse?: string;
}

class BaseApiService {
    private backendUrl: string;
    private token: string | null;
    private httpClient: HttpClient;

    constructor (backendUrl: string, token?: string | null) {
        this.backendUrl = backendUrl;
        this.token = token ?? null;
        this.httpClient = new HttpClient();
    }

    // eslint-disable-next-line class-methods-use-this
    getBaseApiHeaders (token?: string | null): Record<string, string> {
        const headers: Record<string, string> = {
            'abs-referer': window.location.href,
            'page-referer': document.referrer,
        };
        const authToken = token || getAuthToken();
        if (authToken) {
            headers.Authorization = `Token ${authToken}`;
        }
        return headers;
    }

    private constructOptions<T> ({
        method,
        data,
    }: ICallApiArgs<T>): Record<string, unknown> {
        const token = this.token || getAuthToken();
        const options: Record<string, unknown> = {
            method,
            headers: {
                ...this.getBaseApiHeaders(token),
                'Content-Type': 'application/json',
            },
        };
        if (method !== 'get') {
            options.body = JSON.stringify(data);
        }
        return options;
    }

    async callApi<T> ({ method, endPoint, data }: ICallApiArgs<T>) {
        const options = this.constructOptions({ method, endPoint, data });
        const json = await this.httpClient.makeRawJsonRequest(
            this.backendUrl + endPoint,
            options
        );
        return json;
    }

    async callRawApi<T> ({ method, endPoint, data }: ICallApiArgs<T>) {
        const options = this.constructOptions({ method, endPoint, data });
        const json = await this.httpClient.makeRawJsonRequest(
            this.backendUrl + endPoint,
            options
        );
        return json;
    }

    async uploadFile (
        method: RequestInit['method'],
        endPoint: string,
        file: File
    ) {
        const formData = new FormData();
        formData.append('file', file);
        const options = {
            method,
            body: formData,
            headers: this.getBaseApiHeaders(),
        };
        const json = await this.httpClient.makeJsonRequest(
            this.backendUrl + endPoint,
            options
        );
        return json;
    }

    async downloadFileApi (
        method: RequestInit['method'],
        endPoint: string,
        contentType: string
    ) {
        const options = {
            method,
            headers: {
                ...this.getBaseApiHeaders(),
                'Content-Type': contentType,
            },
        };
        const blob = await this.httpClient.makeBlobRequest(
            this.backendUrl + endPoint,
            options
        );
        return blob;
    }

    setBackendUrl (backendUrl: string) {
        this.backendUrl = backendUrl;
    }
}

class CoreApiService extends BaseApiService {
    constructor () {
        // super(`${config.SERVER_URL}${config.SERVER_PORT}/`);
        super(`${config.SERVER_URL}/`);
    }
}

const coreApiService = new CoreApiService();
export async function callApi<T> (
    method: RequestInit['method'],
    endPoint: string,
    data?: T
) {
    return coreApiService.callApi<T>({
        method,
        endPoint,
        data,
    });
}

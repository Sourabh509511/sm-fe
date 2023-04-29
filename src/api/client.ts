class HttpClient {
    // eslint-disable-next-line class-methods-use-this
    async makeJsonRequest (inputUrl: string, options: Record<string, unknown>) {
        const response = await fetch(inputUrl, options);
        return response.json();
    }

    // eslint-disable-next-line class-methods-use-this
    async makeRawJsonRequest (
        inputUrl: string,
        options: Record<string, unknown>
    ): Promise<Response> {
        const response = await fetch(inputUrl, options);
        return response;
    }

    // eslint-disable-next-line class-methods-use-this
    async makeBlobRequest (inputUrl: string, options: Record<string, unknown>) {
        const response = await fetch(inputUrl, options);
        return response.blob();
    }
}

export default HttpClient;

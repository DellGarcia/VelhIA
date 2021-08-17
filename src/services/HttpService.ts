import axios, { AxiosResponse } from 'axios';

export class HttpService {
    
    base_route: string;
    constructor(route: string) {
        this.base_route = route;
    }

    async post<T>(route: string, body: any): Promise<AxiosResponse<T>> {
        return await axios.request<T>({
            url: `${process.env.REACT_APP_API_URL}/${this.base_route}/${route}`,
            method: 'POST',
            data: body
        });
    }

    async get<T>(route: string): Promise<AxiosResponse<T>> {
        return await axios.request<T>({
            url: `${process.env.REACT_APP_API_URL}/${this.base_route}/${route}`,
            method: 'GET'
        });
    }
}

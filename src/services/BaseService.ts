import { EntityResponse } from '../response/EntityResponse';
import { HttpService } from './HttpService';

export abstract class BaseService<T extends EntityResponse> {

    service: HttpService;
    model_route: string;

    constructor(model_route: string) {
        this.model_route = model_route;
        this.service = new HttpService(model_route);
    }

    async getAll() {
        return (await this.service.get<T[]>(``)).data
    }

    async getById(id: number) {
        return (await this.service.get<T>(`${id}/`)).data
    }
}

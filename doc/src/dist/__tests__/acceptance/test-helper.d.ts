import { Lb4LeonorvicenteApllication } from '../..';
import { Client } from '@loopback/testlab';
export declare function setupApplication(): Promise<AppWithClient>;
export interface AppWithClient {
    app: Lb4LeonorvicenteApllication;
    client: Client;
}

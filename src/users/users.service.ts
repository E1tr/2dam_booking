import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getHello(): string {
        return 'Hola Mundo 2ºDAM!';
    }
}

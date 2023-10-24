import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
	getHello(): string {
		return 'Hello nest js and i love leraKull1a';
	}
}

import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { JwtPayload } from '../../auth/@types/jwt-payload.type';

export const GetCurrentUserId = createParamDecorator(
	(_: undefined, context: ExecutionContext): number => {
		console.log(context.switchToHttp().getRequest());
		const request = context.switchToHttp().getRequest();

		const user = request.user as JwtPayload;
		return user.sub;
	}
);
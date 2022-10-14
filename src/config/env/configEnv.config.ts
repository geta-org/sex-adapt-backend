import * as Joi from 'joi';

export default () => ({
	isGlobal: true,
	envFilePath: ['.env.local'],
	validationSchema: Joi.object({
		DB_HOST: Joi.string(),
		DB_PORT: Joi.number(),
		DB_USERNAME: Joi.string(),
		DB_PASSWORD: Joi.string(),
		DB: Joi.string(),
		JWT_SECRET: Joi.string(),
		JWT_EXPIRES_IN: Joi.string()
	})
});
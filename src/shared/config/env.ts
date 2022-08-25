// All variables are set on this file
import * as env from 'env-var';

export const NODE_ENV = env
  .get('NODE_ENV')
  .default('dev')
  .required()
  .asEnum(['dev', 'qas', 'uat', 'production']);

export const PORT = env.get('PORT').default(3000).required().asPortNumber();

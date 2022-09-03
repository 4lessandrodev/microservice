// All variables are set on this file
import * as env from 'env-var';

export const NODE_ENV = env
  .get('NODE_ENV')
  .default('dev')
  .required()
  .asEnum(['dev', 'qas', 'uat', 'production']);

export const URL_CONNECTION = env.get('URL_CONNECTION').required().asString();

export const NO_ACK = env.get('NO_ACK').default('false').required().asBool();

export const QUEUE_NAME = env.get('QUEUE_NAME').required().asString();

export const TRANSPORTER = env
  .get('TRANSPORTER')
  .required()
  .asEnum(['TCP', 'REDIS', 'NATS', 'MQTT', 'GRPC', 'RMQ', 'KAFKA']);

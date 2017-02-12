import {EnvConfig} from './env-config.interface';

const ProdConfig: EnvConfig = {
  ENV: 'PROD',
  API: 'https://gpckt1o796.execute-api.us-east-1.amazonaws.com/staging'
};

export = ProdConfig;

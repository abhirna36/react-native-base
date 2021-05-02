import { AppEnvironmentEnum } from '../constants/Enum'

const ProdConfig = {
  environment: AppEnvironmentEnum.PRODUCTION,
  apis: {
    apiBaseUrl: 'https://dev.mytapplent.com/',
    webBaseUrl: 'https://dev.mytapplent.com/'
  }
}

export default ProdConfig

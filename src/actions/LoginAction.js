import ApiClient from '../apiClient'
import ApiUrls from '../apiClient/EndUrls'
import * as ActionTypes from './Types'

const singletonApiInstance = new ApiClient()

export const authenticateUser = (requestBody) => async (dispatch, getState) => {
  const endUrl = `${ApiUrls.service.securityService}${ApiUrls.login}`
  const queryParams = {
    tenantId: 'dev2'
  }
  const requestBody = {
    user: {
      username: '10000007',
      password: 'Interplex@123'
    },
    device: {
      deviceType: 'DESKTOP_BROWSER'
    },
    dummyWeb: false
  }
  try {
    const metaInfo = await singletonApiInstance.postRequest(endUrl, requestBody, queryParams)

    console.log('API success', metaInfo)

    if (metaInfo) {
      dispatch({
        type: ActionTypes.LOGIN_SUCCESS,
        payload: metaInfo?.data?.data
      })
      return metaInfo?.data?.data
    }
  } catch (error) {
    console.log('Client error', error)
  }
}

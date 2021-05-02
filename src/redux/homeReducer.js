const initialState = {
  }
  
  export const homeReducer = (state = initialState, action) => {
    const { payload } = action
    switch (action.type) {
      case 'TOP_SONGS_REQUEST':
        return {
          ...state,
          isLoading: true
        }
      default:
        return state
    }
  }
  
  export default homeReducer
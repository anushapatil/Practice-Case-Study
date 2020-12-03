import { GET_ROUTES } from './actions'

// Initial state
const initialState = {
  loading: false,
  routes: []
}

export default(state = initialState, { type, payload }) => {
  switch(type) {
    case GET_ROUTES:
      return {
        ...state,
        loading: true,
        payload
      }
    default:
      return state
  }
}

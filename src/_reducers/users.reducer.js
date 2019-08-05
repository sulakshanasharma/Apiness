import { userConstants } from '../_constants';

export function users(state = {}, action) {
  switch (action.type) {
    case userConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case userConstants.GETALL_SUCCESS:
      //alert(action.jsonemp[1].id)
      return {
        items: action.jsonemp
        
      };
    case userConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
      default:
      return state
  }
}
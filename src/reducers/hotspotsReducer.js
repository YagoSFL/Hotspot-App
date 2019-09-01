const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'HOTSPOT_LIST_CHANGED':
      return  ({ ...state, hotspots: action.payload})
    default:
      return state
  }
}
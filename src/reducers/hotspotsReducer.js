const INITIAL_STATE = ['hotspot1', 'hotspot2', 'hotspot3', 'hotspot4'];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'HOTSPOT_LIST_CHANGED':
      return  ({ ...state, hotspots: action.payload})
    default:
      return state
  }
}
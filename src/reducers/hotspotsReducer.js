const INITIAL_STATE = { hotspotList: [], text: {} };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'GET_HOTSPOT_LIST':
      return  {...state, hotspotList: action.payload}
    case 'POPOVER_TEXT_CHANGED':
      return {...state, text: action.payload}
    default:
      return state
  }
}
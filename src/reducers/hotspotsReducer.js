const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case 'HOTSPOT_ADDED':
      return  ([...state, action.payload])
    default:
      return state
  }
}
export const getHotspotList = () => {
  const hotspotList = window.localStorage.getItem('hotspots');
  const data = hotspotList ? JSON.parse(hotspotList) : [];
  return {
    type: 'GET_HOTSPOT_LIST',
    payload: data,
  };
};

export const saveTexts = (text) => {
  const data = Object.assign({}, text);
  return {
    type: 'POPOVER_TEXT_CHANGED',
    payload: data,
  }
};

export const updateSpots = (data, index) => {
  console.log(data);
  const hotspotList = getHotspotList().payload;
  const updatedData = Object.assign(
    [...hotspotList], {[index]:
        Object.assign({}, hotspotList[index], data)});
  return window.localStorage.setItem('hotspots', JSON.stringify(updatedData));
};

export const createNewSpot = (
  positX,
  positY,
) => {
  return dispatch => {
    const hotspotList = getHotspotList().payload;
    const data = {
      name: `Hotspot #${hotspotList.length + 1}`,
      positX,
      positY,
      title: null,
      message: null,
      openedPopover: true,
    };
    hotspotList.push(data);
    window.localStorage.setItem('hotspots', JSON.stringify(hotspotList));
    dispatch(getHotspotList());
  };
};


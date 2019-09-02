export const getHotspotList = () => {
    const hotspotList = window.localStorage.getItem('hotspots');
    const data = hotspotList ? JSON.parse(hotspotList) : [];
    return {
        type: 'GET_HOTSPOT_LIST',
        payload: data,
    };
};

export const saveTexts = (text) => {
    const data = Object.assign({}, text)
    return {
        type: 'POPOVER_TEXT_CHANGED',
        payload: data,
    }
}
export const newHotspot = (event, hotspotsList) => {
    const data = {
      name: `Hotspot #${hotspotsList.length + 1}`,
      positX: event.clientX,
      positY: event.clientY,
    };
    return {
        type: 'HOTSPOT_ADDED',
        payload: data,
    };
};
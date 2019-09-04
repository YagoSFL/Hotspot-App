import { useEffect } from 'react';

const useFetch = (fetchHotspots, dispatch) => {
  useEffect(() => {
    dispatch(fetchHotspots());
  }, [fetchHotspots, dispatch])
}

export default useFetch;

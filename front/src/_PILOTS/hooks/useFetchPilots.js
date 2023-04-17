import { useEffect,useState } from "react";
import axios from "axios";

export default function useFetchPilots(url) {
  const [_Data, _setData] = useState(null);
  const [_Loading, _setLoading] = useState(false);
  const [_Error, _setError] = useState(null);

  useEffect(() => {
    get_pilot()
  }, [url]);

  const get_pilot = () => {
    _setLoading(true);
    axios({
        url,
    })
      .then((res) => {
        _setData(res.data);
      })
      .catch((err) => {
        _setError(err);
      })
      .finally(() => {
        _setLoading(false);
      });
  };

  return { _Data, _Loading, _Error };
}

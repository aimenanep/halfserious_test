import { useEffect,useState } from "react";
import axios from "axios";

export default function useShipsFetch(url) {
  const [_Data, _setData] = useState([]);
  const [_Loading, _setLoading] = useState(false);
  const [_Error, _setError] = useState(null);

  useEffect(() => {
    get_ships()
  }, [url]);

  const get_ships = () => {
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

  return { _Data, _Loading, _Error, get_ships };
}

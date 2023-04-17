import { useEffect,useState } from "react";
import axios from "axios";

export default function useShipsFetchImage(url) {
  const [_ImageURL, _setImageURL] = useState(null);
  const [_Loading, _setLoading] = useState(false);
  const [_Error, _setError] = useState(null);

  useEffect(() => {
    get_ship_image()
  }, [url]);

  const get_ship_image = () => {
    _setLoading(true);
    axios({
        url,
    })
      .then((res) => {
        _setImageURL(res.data.url);
      })
      .catch((err) => {
        _setError(err);
      })
      .finally(() => {
        _setLoading(false);
      });
  };

  return { _ImageURL, _Loading, _Error };
}

import { useState, useEffect } from "react";
import Spinner from "../spinner"
import Error from "../error"

const withData = (View) => {
    return  (props) => {
      const { getData } = props;
      const [data, setData] = useState(null);
      const [error, setError] = useState(false);
      const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          update();
        }, [getData])

      const update = () => {
        getData()
          .then(data => {
            setData(data);
            setLoading(false);
          })
          .catch(onError)
      }
      const onError = () => {
        setError(true);
        setLoading(false)
      }
  
        const loadMessage = loading ? <Spinner /> : null;
        const errorMessage = error ? <Error /> : null;
        return <View
                {...props}
                data={data}
                loadMessage={loadMessage}
                errorMessage={errorMessage}
                loading={loading}
              />
      }
}

export default withData;
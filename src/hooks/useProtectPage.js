import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const useProtectedPage = () => {
  const history = useHistory();

 useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      history.push("/"); 
    }
  }, [history]);
};

export default useProtectedPage;
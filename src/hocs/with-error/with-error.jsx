import React from "react";
import {useSelector} from "react-redux";
import Error from "../../components/error/error";

const withError = (Component) => {
  const WithError = (props) => {
    const {isError} = useSelector((state) => state.MAIN);

    return (
      <>
        {
          isError && <Error/>
        }
        <Component {...props}/>
      </>
    );
  };

  return WithError;
};

export default withError;

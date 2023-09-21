import React, { useEffect } from "react";
import useApi from "../../../CustomHooks/UseApi"; // Update the path
import { PutApi } from "../../../Constant/Constant";

const PutExampleComponent: React.FC = () => {
  // Put api call example
  const { data, error, loading, requestApi } = useApi(null);
  useEffect(() => {
    const requestData = {
      name: "xyyz",
    };
    requestApi(
      "PUT",
      PutApi,
      requestData         
    ); // Remove queryParams for PUT
  }, []);
  if (error) {
    return <div>Error Occurred: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading Data. Please Wait...</div>;
  }
  return (
    <div>
      hi
      <h1>PUT Request Example</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default PutExampleComponent;

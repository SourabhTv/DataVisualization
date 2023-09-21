import React, { useEffect } from "react";
import useApi from "../../../CustomHooks/UseApi";
import { DeleteApi } from "../../../Constant/Constant"

const DeleteExampleComponent: React.FC = () => {
  // Delete api call example
  const { data, error, loading, requestApi } = useApi(null);
  useEffect(() => {
    requestApi(
      "DELETE",
      DeleteApi 
    );
  }, []);
  if (error) {
    return <div>Error Occurred: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading Data. Please Wait...</div>;
  }
  return (
    <div>
      <h1>DELETE Request Example</h1>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default DeleteExampleComponent;

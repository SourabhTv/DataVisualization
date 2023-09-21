import React, { useEffect } from "react";
import UseApi from "../../../../src/CustomHooks/UseApi"; // Update the path
import { PostApi } from "../../../Constant/Constant";

const PostExampleComponent: React.FC = () => {
  // Post api call example
  const { data, error, loading, requestApi } = UseApi(null);
  useEffect(() => {
    const requestData = {
      key1: "value1",
      key2: "value2",
    };
    requestApi(
      "POST",
      PostApi,
      requestData,       
    ); // Remove queryParams for POST
  }, []);

  if (error) {
    return <div>Error Occurred: {error.message}</div>;
  }
  if (loading) {
    return <div>Loading Data. Please Wait...</div>;
  }
  return (
    <div>
      <h1>POST Request Example</h1>
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
};

export default PostExampleComponent;

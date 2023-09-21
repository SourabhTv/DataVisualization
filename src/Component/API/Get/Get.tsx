import React, { useEffect } from 'react';
import useApi from '../../../CustomHooks/UseApi';
import { GetApi } from '../../../Constant/Constant';

export type Repository = {
  id: number;
  node_id: string;
  name: string;
  full_name: string;
};
const GetAPIExample: React.FC = () => {
  // Get api call example
  const { data, error, loading, requestApi } = useApi<Repository[]>(null);
  useEffect(() => {
    const config = {queryParams : {
      per_page: 2
    }}
    requestApi('GET', GetApi, config);
  }, []);
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div>
      <h1>Repositories:</h1>
      <ul>
        {data && (data || []).map((repo) => (
          <li key={repo.id}>
            <strong>Name:</strong> {repo.name}
            <br />
            <strong>Full Name:</strong> {repo.full_name}
            <br />
            <strong>Node ID:</strong> {repo.node_id}
            <br />
            <strong>ID:</strong> {repo.id}
            <br />
          </li>
        ))}
      </ul>
    </div>
  );
};
export default GetAPIExample;


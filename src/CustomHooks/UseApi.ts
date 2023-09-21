import { useState } from 'react';
import {
  getRequest,
  postRequest,
  putRequest,
  deleteRequest,
} from '../Services/RequestSets/RequestSets';
import { AxiosResponse } from 'axios';

type ThttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';
interface IapiResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
}
interface IreturnResponse<T> {
  data: T | null;
  error: Error | null;
  loading: boolean;
  requestApi: any
}
const UseApi = <T>(initialData: T | null = null): IreturnResponse<T> => {
  const [response, setResponse] = useState<IapiResponse<T>>({
    data: initialData,
    error: null,
    loading: false
  });
  const requestApi = async (
    method: ThttpMethod,
    url: string,
    requestData?: any,
    config?: object
  ) => {
    setResponse((prevResponse) => ({
      ...prevResponse,
      loading: true,
    }));
    try {
      let axiosResponse: AxiosResponse<T>;
      switch (method) {
        case 'GET':
          axiosResponse = await getRequest<T>(url, config);
          break;
        case 'POST':
          axiosResponse = await postRequest<T>(url, requestData, config);
          break;
        case 'PUT':
          axiosResponse = await putRequest<T>(url, requestData, config);
          break;
        case 'DELETE':
          axiosResponse = await deleteRequest<T>(url, config);
          break;
        default:
          throw new Error(`Unsupported HTTP method: ${method}`);
      }
      setResponse({
        data: axiosResponse.data,
        error: null,
        loading: false,
      });
    } catch (err: unknown) {
      if (err instanceof Error) {
        setResponse({
          data: null,
          error: err,
          loading: false,
        });
      }
    }
  };
  const { data, error, loading } = response;
  return { data, error, loading, requestApi };
};
export default UseApi;

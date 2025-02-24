import {
  useMutation,
  type UseMutationOptions,
  useQuery,
  type UseQueryOptions,
} from "@tanstack/react-query";
import { APIError, fetchPilotageAPI, fetchPortailAPI } from "../functions/api";
import { useAccessToken } from "./useAuth.ts";
import type { APIMethods, APIPaths, APIRequest, APIRequests, APIResponse } from "types/api.ts";
import type {
  APIMethods as APIMethodsPortail,
  APIPaths as APIPathsPortail,
  APIRequest as APIRequestPortail,
  APIRequests as APIRequestsPortail,
  APIResponse as APIResponsePortail,
} from "types/apiPortail.ts";

export function useFetchQueryPilotage<Path extends APIPaths, Options extends APIRequests<Path>>(
  path: Path,
  options?: Options & { headers?: Record<string, string> },
  queryOptions?: UseQueryOptions<unknown, APIError, APIResponse<Path, Options["method"]>>,
) {
  const key = [path, options];
  const token = useAccessToken();
  const authHeaders = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  const optionsWithHeaders = {
    ...options,
    headers: {
      ...options?.headers,
      ...authHeaders,
    },
  };
  return {
    key,
    ...useQuery({
      queryKey: key,
      queryFn: () => fetchPilotageAPI(path, optionsWithHeaders as any as Options),
      ...queryOptions,
    }),
  };
}

export function useFetchQueryPortail<
  Path extends APIPathsPortail,
  Options extends APIRequestsPortail<Path>,
>(
  path: Path,
  options?: Options & { headers?: Record<string, string> },
  queryOptions?: Omit<
    UseQueryOptions<unknown, APIError, APIResponsePortail<Path, Options["method"]>>,
    "queryKey" | "queryFn"
  >,
) {
  const key = [path, options];
  const token = useAccessToken();
  const authHeaders = token
    ? {
        Authorization: `Bearer ${token}`,
      }
    : {};
  const optionsWithHeaders = {
    ...options,
    headers: {
      ...options?.headers,
      ...authHeaders,
    },
  };
  return {
    key,
    ...useQuery({
      queryKey: key,
      queryFn: () => fetchPortailAPI(path, optionsWithHeaders as any as Options),
      ...queryOptions,
    }),
  };
}

// use only to get sources
export function useFetchQueryPortailWithoutAuth<
  Path extends APIPathsPortail,
  Options extends APIRequestsPortail<Path>,
>(
  path: Path,
  options?: Options & { headers?: Record<string, string> },
  queryOptions?: Omit<
    UseQueryOptions<unknown, APIError, APIResponsePortail<Path, Options["method"]>>,
    "queryKey" | "queryFn"
  >,
) {
  const key = [path, options];

  const optionsWithHeaders = {
    ...options,
    headers: {
      ...options?.headers,
    },
  };
  return {
    key,
    ...useQuery({
      queryKey: key,
      queryFn: () => fetchPortailAPI(path, optionsWithHeaders as any as Options),
      ...queryOptions,
    }),
  };
}

export function useFetchMutationPilotage<Path extends APIPaths, Method extends APIMethods<Path>>(
  path: Path,
  method: Method,
  queryOptions?: UseMutationOptions<
    APIResponse<Path, Method>,
    APIError,
    Omit<APIRequest<Path, Method>, "method">
  >,
) {
  const token = useAccessToken();
  const authHeaders = {
    Authorization: `Bearer ${token}`,
  };
  return useMutation<APIResponse<Path, Method>, APIError, Omit<APIRequest<Path, Method>, "method">>({
    ...(queryOptions as any),
    mutationFn: request => {
      return fetchPilotageAPI(path, { ...request, method, headers: authHeaders });
    },
    onError: (err, variables) => {
      queryOptions?.onError?.(err, variables, undefined);
    },
  });
}

export function useFetchMutationPortail<
  Path extends APIPathsPortail,
  Method extends APIMethodsPortail<Path>,
>(
  path: Path,
  method: Method,
  queryOptions?: UseMutationOptions<
    APIResponsePortail<Path, Method>,
    APIError,
    Omit<APIRequestPortail<Path, Method>, "method">
  >,
) {
  const token = useAccessToken();
  const authHeaders = {
    Authorization: `Bearer ${token}`,
  };
  return useMutation<
    APIResponsePortail<Path, Method>,
    APIError,
    Omit<APIRequestPortail<Path, Method>, "method">
  >({
    ...(queryOptions as any),
    mutationFn: request => {
      return fetchPortailAPI(path, { ...request, method, headers: authHeaders });
    },
    onError: (err, variables) => {
      queryOptions?.onError?.(err, variables, undefined);
    },
  });
}

// use only for support and reinit password
export function useFetchMutationWithoutAuth<
  Path extends APIPathsPortail,
  Method extends APIMethodsPortail<Path>,
>(
  path: Path,
  method: Method,
  queryOptions?: UseMutationOptions<
    APIResponsePortail<Path, Method>,
    APIError,
    Omit<APIRequestPortail<Path, Method>, "method">
  >,
) {
  return useMutation<
    APIResponsePortail<Path, Method>,
    APIError,
    Omit<APIRequestPortail<Path, Method>, "method">
  >({
    ...(queryOptions as any),
    mutationFn: request => {
      return fetchPortailAPI(path, { ...request, method });
    },
    onError: (err, variables) => {
      queryOptions?.onError?.(err, variables, undefined);
    },
  });
}

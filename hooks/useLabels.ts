import { useEffect, useState } from "react";
import type { IGetLabels } from "../pages/api/labels";

// Simple hook for fetching labels, no caching
export function useLabels<T extends string[]>(keys: T) {

  const [error, setError] = useState<unknown | undefined>(undefined);
  const [labels, setLabels] = useState<Record<string, string> | undefined>(undefined);

  // Perform network call when loading
  useEffect(
    () => {
      let isMounted = true;

      getLabels(keys)
        .then(labels => { if (isMounted) setLabels(labels); })
        .catch(err => { if (isMounted) setError(err); })

      return () => { isMounted = false; }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    keys,
  );

  return {
    isLoading: !error && !labels,
    isError: !!error,
    isLoaded: !!labels,
    labels,
    error,
  };
}

export async function getLabels(keys: string[]) {
  const apiServer = "http://localhost:3000"; // TODO: env? 
  const querystring = keys
    .map(key => `key=${encodeURIComponent(key)}`)
    .join("&");
  const res = await fetch(apiServer + '/api/labels?' + querystring)
  const result = await res.json() as IGetLabels;
  if (!result.isSuccess) throw new Error(result.errorMessage);
  return result.result;
}

import {useCallback, useState} from 'react';

export function useRequest<TData, TParams extends any[]>(promise: (...args: TParams) => Promise<TData>) {
    const [data, setData] = useState<TData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<Error | null>(null);

    const run = useCallback((...args: TParams) => {
        setData(null);
        setLoading(true);
        setError(null);
        promise(...args)
            .then((response) => {
                setData(response);
                setError(null);
            })
            .catch((error: Error) => {
                setData(null);
                setError(error);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [promise]);

    return {data, setData, loading, setLoading, error, setError, run};
}
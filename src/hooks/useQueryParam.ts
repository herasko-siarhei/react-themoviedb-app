import {useCallback, useMemo} from 'react';
import {NavigateOptions, useSearchParams} from 'react-router-dom';

export function useQueryParam<T>(
    key: string,
    defaultValue: T
): [T, (newQuery: T, options?: NavigateOptions) => void] {
    const [searchParams, setSearchParams] = useSearchParams();
    const paramValue = searchParams.get(key);
    const value: T = useMemo(() => paramValue ? JSON.parse(paramValue) : defaultValue, [paramValue, defaultValue]);

    const setValue = useCallback(
        (newValue: T, options?: NavigateOptions) => {
            const newSearchParams = new URLSearchParams(searchParams);
            newSearchParams.set(key, JSON.stringify(newValue));
            setSearchParams(newSearchParams, options);
        },
        [key, searchParams, setSearchParams]
    );

    return [value, setValue];
}
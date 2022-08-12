import {useLocation} from 'react-router-dom';

export function useRouteState() {
    const state = useLocation().state as { from?: string, message?: string } | undefined;
    const from = state?.from || null;
    const message = state?.message || null;
    return {from, message};
}
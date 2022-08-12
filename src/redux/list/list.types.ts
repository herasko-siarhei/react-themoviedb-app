import {PayloadAction} from '@reduxjs/toolkit';

import {Card} from 'types/card';

export type ListState = {
    list: Card[];
    total: number;
    loading: boolean;
    error: Error | null;
}

export type ListFulfilledAction = PayloadAction<{ list: Card[], total: number }>

export type ListRejectedAction = PayloadAction<Error>
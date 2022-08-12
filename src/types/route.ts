import {FC, LazyExoticComponent} from 'react';

export enum RouteVariant {
    Public = 'public',
    Guest = 'guest',
    Private = 'private'
}

export type Route = {
    variant: RouteVariant;
    path: string;
    component: LazyExoticComponent<FC>;
}
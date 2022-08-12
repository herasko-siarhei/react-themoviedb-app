import {lazy} from 'react';

import {Route, RouteVariant} from 'types/route';

const Home = lazy(() => import('pages/Home'));
const Authentication = lazy(() => import('pages/Authentication'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const MovieList = lazy(() => import('pages/MovieList'));
const TVDetails = lazy(() => import('pages/TVDetails'));
const TVList = lazy(() => import('pages/TVList'));
const MyList = lazy(() => import('pages/MyList'));
const NotFound = lazy(() => import('pages/NotFound'));

export enum RoutePath {
    Home = '/',
    Authentication = '/authentication',
    MovieDetails = '/movie-details',
    MovieList = '/movie-list',
    TVDetails = '/tv-details',
    TVList = '/tv-list',
    MyList = '/my-list',
    NotFound = '/not-found'
}

export const routeList: Route[] = [
    {variant: RouteVariant.Public, path: RoutePath.Home, component: Home},
    {variant: RouteVariant.Guest, path: RoutePath.Authentication, component: Authentication},
    {variant: RouteVariant.Public, path: `${RoutePath.MovieDetails}/:id`, component: MovieDetails},
    {variant: RouteVariant.Public, path: RoutePath.MovieList, component: MovieList},
    {variant: RouteVariant.Public, path: `${RoutePath.TVDetails}/:id`, component: TVDetails},
    {variant: RouteVariant.Public, path: RoutePath.TVList, component: TVList},
    {variant: RouteVariant.Private, path: RoutePath.MyList, component: MyList},
    {variant: RouteVariant.Public, path: RoutePath.NotFound, component: NotFound},
    {variant: RouteVariant.Public, path: '*', component: NotFound}
];
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MoviesComponent } from '../app/components/movies/movies.component';
import { MovieComponent } from '../app/components/movie/movie.component';

const appRoutes: Routes = [
    {
        path:'',
        component: MoviesComponent
    },
    {
        path:'movie/:id',
        component: MovieComponent
    }
];

export const appRoutingProviders: any[] = []

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
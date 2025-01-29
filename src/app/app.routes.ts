import { Routes } from '@angular/router';

export const routes: Routes = [

    {path: '', pathMatch : 'full', redirectTo: 'inicio'},

    {
        path: '',
        children: [
            {path: '', children: [
                // Paginas
                {path: '', loadChildren: () => import('./pages/pages.routes')},
            ]},
        ]
    },
];

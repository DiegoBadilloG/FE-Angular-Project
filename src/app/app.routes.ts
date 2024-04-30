import { Routes } from '@angular/router';
import { RecipiesComponent } from './Features/recipies/recipies.component';
import { HomeComponent } from './Features/home/home.component';

export const routes: Routes = [
    { path: "recipies", component: RecipiesComponent},
    { path: "home", component: HomeComponent},
];

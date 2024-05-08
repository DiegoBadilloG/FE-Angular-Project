import { Routes } from '@angular/router';
import { RecipiesComponent } from './Features/recipies/recipies.component';
import { HomeComponent } from './Features/home/home.component';
import { FaqComponent } from './Features/faq/faq.component';

export const routes: Routes = [
    { path: "recipies", component: RecipiesComponent},
    { path: "home", component: HomeComponent},
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: "faq", component: FaqComponent}
];

import { Routes } from '@angular/router';
import { RecipiesComponent } from './Features/recipies/recipies.component';
import { HomeComponent } from './Features/home/home.component';
import { FaqComponent } from './Features/faq/faq.component';
import { QuizComponent } from './Features/quiz/quiz.component';
import { PwdManaggerComponent } from './Features/pwd-managger/pwd-managger.component';
import { ECommercialComponent } from './Features/e-commercial/e-commercial.component';

export const routes: Routes = [
    { path: "recipies", component: RecipiesComponent},
    { path: "home", component: HomeComponent},
    { path: "", redirectTo: "/home", pathMatch: "full"},
    { path: "faq", component: FaqComponent},
    { path: "quiz", component: QuizComponent},
    { path: "pwdManager", component: PwdManaggerComponent},
    { path: "eCommercial", component:ECommercialComponent},
    { path: "**", redirectTo: "home", pathMatch: "full"}
];

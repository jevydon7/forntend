import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { first } from 'rxjs';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { FirstpageComponent } from './firstpage/firstpage.component';
import { LoginComponent } from './login/login.component';
import { EventListComponent } from './modules/event-list/event-list.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [ {path:'',redirectTo:'home',pathMatch:'full'},
{path:'home',component:FirstpageComponent},
{path:'login',component:LoginComponent},
{path:'admin',component:AdminComponent, canActivate:[AuthGuard],loadChildren:()=> import('./modules/admin/admin.module').then((m) => m.AdminModule)},
{path:'services',component:ServicesComponent},
{path:'events',component: EventListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

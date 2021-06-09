import { NgModule } from '@angular/core';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import {Routes, RouterModule } from '@angular/router';
const routes: Routes =
  [
    {path: '', pathMatch: 'full', redirectTo: '/home' },
    {path: 'contacts' , component: ContactListComponent},
    {path: 'contacts/contact/:id' , pathMatch: 'prefix', component: ContactDetailComponent},
    { path: 'user', component: UserComponent },
    { path: 'admin', component: AdminComponent, outlet:'test1' }

  ];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

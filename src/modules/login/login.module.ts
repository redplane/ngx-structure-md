import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatDrawerContainer,
  MatInputModule,
  MatSidenav,
  MatSidenavContent,
  MatSidenavModule
} from '@angular/material';

import {LoginRoute} from './login.route';
import {LoginComponent} from './login.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    LoginRoute,
    MatSidenavModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  providers: [
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}

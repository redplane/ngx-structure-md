import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule, MatCheckboxModule, MatInputModule} from '@angular/material';

import {LoginRoute} from './login.route';
import {LoginComponent} from './login.component';

@NgModule({
  imports: [
    CommonModule,
    LoginRoute,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    FlexLayoutModule.withConfig({addFlexToParent: false})
  ],
  declarations: [LoginComponent]
})
export class LoginModule {
}

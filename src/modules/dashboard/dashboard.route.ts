import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DashboardComponent} from "./dashboard.component";
import {AuthorizeLayoutComponent} from "../shared/authorize-layout/authorize-layout.component";
import {IsAuthorizedGuard} from "../../guards/is-authorized-guard";

//#region Route configuration

const routes: Routes = [
  {
    path: '',
    component: AuthorizeLayoutComponent,
    canActivate: [IsAuthorizedGuard],
    data:{
      appCssClasses: ['skin-blue-light', 'fixed', 'sidebar-mini', 'sidebar-mini-expand-feature']
    },
    children: [
      {
        path: '',
        component: DashboardComponent,
        pathMatch: 'full'
      }
    ]
  }
];


//#endregion

//#region Module configuration

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRouteModule {
}

//#endregion

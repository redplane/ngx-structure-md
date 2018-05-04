import {Inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {IAccountService} from "../interfaces/services/account-service.interface";
import {ProfileViewModel} from "../view-models/profile.view-model";
import {Observable} from "rxjs/index";

@Injectable()
export class ProfileResolve implements Resolve<Account> {

  //#region Constructor

  /*
  * Initiate resolver with injectors.
  * */
  public constructor(@Inject('IAccountService') private accountService: IAccountService) {
  }

  //#endregion

  //#region Methods

  /*
  * Resolve service value.
  * */
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): ProfileViewModel | Observable<ProfileViewModel> | Promise<ProfileViewModel> {
    return this.accountService.getProfile();
  }

//#endregion
}

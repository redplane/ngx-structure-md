import {Inject, Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Observable} from "rxjs/Observable";
import {Response} from '@angular/http';
import {IAccountService} from "../interfaces/services/account-service.interface";
import {ProfileViewModel} from "../view-models/profile.view-model";

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
  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Account | Observable<Account> | Promise<Account> {
    return this.accountService.getProfile().then((x: Response) => {
      return <ProfileViewModel> x.json();
    });
  }

//#endregion
}

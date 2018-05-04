import {IAccountService} from "../interfaces/services/account-service.interface";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProfileViewModel} from "../view-models/profile.view-model";

@Injectable()
export class AccountService implements IAccountService{

  //#region Constructor

  /*
  * Initiate service with injectors.
  * */
  public constructor(private http: HttpClient){

  }

  //#endregion

  //#region Methods

  /*
  * Get profile information.
  * */
  public getProfile(): Promise<ProfileViewModel> {
    let url = '/assets/user.json';
    return this.http.get(url).toPromise();
  }

  //#endregion

}

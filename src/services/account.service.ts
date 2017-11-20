import {IAccountService} from "../interfaces/services/account-service.interface";
import {Http, Response} from "@angular/http";
import {Injectable} from "@angular/core";

@Injectable()
export class AccountService implements IAccountService{

  //#region Constructor

  /*
  * Initiate service with injectors.
  * */
  public constructor(private http: Http){

  }

  //#endregion

  //#region Methods

  /*
  * Get profile information.
  * */
  public getProfile(): Promise<Response> {
    let url = '/assets/user.json';
    return this.http.get(url).toPromise();
  }

  //#endregion

}

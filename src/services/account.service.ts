import {IAccountService} from "../interfaces/services/account-service.interface";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {ProfileViewModel} from "../view-models/profile.view-model";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AccountService implements IAccountService {

  //#region Constructor

  /*
  * Initiate service with injectors.
  * */
  public constructor(private http: HttpClient) {

  }

  //#endregion

  //#region Methods

  /*
  * Get profile information.
  * */
  public getProfile(): Observable<ProfileViewModel> {
    let url = '/assets/user.json';
    return Observable.create(observer => {
      let profile = new ProfileViewModel();
      profile.email = 'Email 01';
      profile.joinedTime = 0;
      profile.nickname = 'Nick name 01';
      profile.photoRelativeUrl = 'abc';
      observer.next(profile);
    });
    //
    // return this.http.get(url)
    //   .map((x: Response) => {
    //     console.log(x);
    //     return <ProfileViewModel> x.body;
    //   });
  }

  //#endregion

}

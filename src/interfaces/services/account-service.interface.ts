import {Response} from '@angular/http';

export interface IAccountService {

  //#region Methods

  /*
  * Get profile information.
  * */
  getProfile(): Promise<Response>;

  //#endregion

}

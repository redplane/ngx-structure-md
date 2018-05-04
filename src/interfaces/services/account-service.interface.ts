import {ProfileViewModel} from "../../view-models/profile.view-model";

export interface IAccountService {

  //#region Methods

  /*
  * Get profile information.
  * */
  getProfile(): Promise<ProfileViewModel>;

  //#endregion

}

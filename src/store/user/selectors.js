import {NameSpace} from '../reducer';

export const getAuthorizationStatus = (state) => state[NameSpace.USER].authorizationStatus;

import {createSelector} from "reselect";
import {NameSpace} from '../../reducer';

export const getComments = (state) => state[NameSpace.OFFER].comments;

export const getLastComments = createSelector(
    getComments,
    (comments) => {
      const lastComments = comments.slice().sort((a, b) => new Date(b.date) - new Date(a.date));

      return lastComments.length > 10 ? lastComments.slice(0, 10) : lastComments;
    },
);

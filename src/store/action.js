export const ActionType = {
  CHANGE_LOCATION: `main/changeLocation`,
  CHANGE_ACTIVE_CARD: `main/changeActiveCard`,
  SET_DEFAULT: `main/setDefault`
};

export const ActionCreator = {
  changeLocation: (location) => ({
    type: ActionType.CHANGE_LOCATION,
    payload: location,
  }),
  changeActiveCard: (id) => ({
    type: ActionType.CHANGE_ACTIVE_CARD,
    payload: id,
  }),
  setDefault: () => ({
    type: ActionType.SET_DEFAULT
  })
};

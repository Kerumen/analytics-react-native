export const resetSessionPartnerParameters = jest.fn();
export const addSessionPartnerParameter = jest.fn();

export const Adjust = {
  resetSessionPartnerParameters,
  addSessionPartnerParameter,
};

export const addCallbackParameter = jest.fn();
export const setRevenue = jest.fn();
export const setTransactionId = jest.fn();

export class AdjustEvent {
  addCallbackParameter = addCallbackParameter;
  setRevenue = setRevenue;
  setTransactionId = setTransactionId;
}

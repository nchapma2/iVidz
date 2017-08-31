import * as SUBUtil from '../util/subscription_util';

export const RECEIVE_SUBSCRIPTION = 'RECEIVE_SUBSCRIPTION';
export const DESTROY_SUBSCRIPTION = 'DESTROY_SUBSCRIPTION';

export const receiveSubscription = subscription => ({
  type: RECEIVE_SUBSCRIPTION,
  subscription
});

export const deleteSubscription = subscription => ({
  type: DESTROY_SUBSCRIPTION,
  subscription
});

export const destroySubscription = subscription => dispatch => (
  SUBUtil.destroySubscription(subscription)
  .then((subscription) => dispatch(deleteSubscription(subscription)))
);

export const createSubscription = subscription => dispatch => (
  SUBUtil.createSubscription(subscription)
    .then((subscription) => dispatch(receiveSubscription(subscription)))
);

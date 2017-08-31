export const createSubscription = subscription => (
  $.ajax({
    method: 'POST',
    url: 'api/subscriptions',
    data: {
      subscription
    }
  })
);

export const destroySubscription = subscription_id => (
  $.ajax({
    method: 'DELETE',
    url: `api/subscriptions/${subscription_id}`,
  })
);

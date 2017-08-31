json.extract! @subscription, :id, :subscriber_id, :subscribed_id
json.set! :subscribed_sub_count, @subscription.subscribed_user.user_subscription_ids.count

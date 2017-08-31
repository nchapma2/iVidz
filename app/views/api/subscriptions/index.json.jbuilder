@subscriptions.each do |subscription|
  json.set! subscription.id do
    json.extract! subscription, :id, :subscriber_id, :subscribed_id
  end
end

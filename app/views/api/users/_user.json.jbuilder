json.extract! user, :id, :username, :email
json.set! :avatar, asset_path(user.avatar.url)
json.set! :subscribed_channels, user.subscribed_channel_ids
json.subscriptions do
  json.array! user.subscriptions.each do |sub|
    json.extract! sub, :id, :subscriber_id, :subscribed_id
  end
end

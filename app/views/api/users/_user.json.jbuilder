json.extract! user, :id, :username, :email
json.set! :avatar, asset_path(user.avatar.url)
json.set! :subscriptions, user.subscriptions

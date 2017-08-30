json.extract! user, :id, :username, :email
json.set! :avatar, asset_path(user.avatar.url)
json.set! user.posted_date

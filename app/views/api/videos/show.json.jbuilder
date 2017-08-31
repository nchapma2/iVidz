
json.video do
  json.extract! @video, :id, :title, :description, :uploader_id, :category, :views, :video, :created_at
  json.set! :thumb, asset_path(@video.video.url(:thumb))
  json.uploader_avatar asset_path(@video.uploader.avatar.url)
  json.uploader_username @video.uploader.username
  json.uploader_sub_count @video.uploader.user_subscription_ids.length
  json.comment_ids @video.comment_ids
  json.like_ids @video.like_ids
  json.likes @video.likes
  json.posted @video.posted_date
end

json.comments do
    json.array! @video.comments do |comment|
      json.partial! 'api/comments/comment', comment: comment
  end
end

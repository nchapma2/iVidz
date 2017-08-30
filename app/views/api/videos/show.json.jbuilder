
json.video do
  json.extract! @video, :id, :title, :description, :uploader, :category, :views, :video, :created_at
  json.set! :thumb, asset_path(@video.video.url(:thumb))
  json.uploader_avatar asset_path(@video.uploader.avatar.url)
  json.comment_ids @video.comment_ids
  json.likes @video.like_ids.length
end

json.comments do
    json.array! @video.comments do |comment|
      json.partial! 'api/comments/comment', comment: comment
  end
end

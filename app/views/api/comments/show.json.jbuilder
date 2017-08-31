json.extract! @comment, :id, :body, :author_id, :video_id
json.posted @comment.posted_date
json.author_avatar asset_path(@comment.author.avatar.url)
json.author @comment.author.username
json.like_ids @comment.like_ids
json.likes @comment.likes

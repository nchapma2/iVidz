json.extract! video, :id, :title, :description, :uploader_id, :category, :views
json.set! :uploader, video.uploader.username
json.posted video.posted_date
json.like_ids video.like_ids
json.set! :thumb, asset_path(video.video.url(:thumb))

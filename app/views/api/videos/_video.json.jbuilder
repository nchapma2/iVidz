json.extract! video, :id, :title, :description, :uploader_id, :category, :views
json.set! :thumb, asset_path(video.video.url(:thumb))

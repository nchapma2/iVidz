json.extract! @video, :id, :title, :description, :uploader, :category, :views, :video, :created_at
json.set! :thumb, asset_path(@video.video.url(:thumb))

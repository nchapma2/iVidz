json.array! @videos.each do |video|
    json.partial! '/api/videos/video', video: video
end

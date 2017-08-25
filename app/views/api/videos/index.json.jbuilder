@videos.each do |video|
  json.set! video.id do
    json.partial! '/videos/video', video: video
  end
end

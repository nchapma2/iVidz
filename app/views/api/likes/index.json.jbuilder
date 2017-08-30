@likes.each do |like|
  json.set! like.id do
    json.extract! like, :id, :video_id, :user_id
  end
end

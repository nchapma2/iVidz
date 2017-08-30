class Like < ApplicationRecord
  validates :user_id, :video_id, presence: true



end

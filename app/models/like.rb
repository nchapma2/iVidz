class Like < ApplicationRecord
  validates :user_id, :video_id, presence: true

  belongs_to :video

  belongs_to :user

end

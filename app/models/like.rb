class Like < ApplicationRecord
  validates :user_id, presence: true
  validates_uniqueness_of :user_id, scope: [:likeable_id, :likeable_type]

  belongs_to :likeable, polymorphic: true


end

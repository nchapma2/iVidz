class Subscription < ApplicationRecord
  validates :subscriber_id, :subscribed_id, presence: true
  validates_uniqueness_of :subscriber_id, scope: :subscribed_id

  belongs_to :subscriber,
  primary_key: :id,
  foreign_key: :subscriber_id,
  class_name: 'User'

  belongs_to :subscribed_user,
  primary_key: :id,
  foreign_key: :subscribed_id,
  class_name: 'User'


end

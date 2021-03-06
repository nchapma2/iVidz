class User < ApplicationRecord
  include ActionView::Helpers::DateHelper

  validates :username, :email, :password_digest, :session_token, presence: true
  validates :username, :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_attached_file :avatar,
    default_url: "https://s3.amazonaws.com/ividz-dev/seeds/blank-profile.png"

  validates_attachment :avatar,
    content_type: { content_type: ["image/jpeg", "image/gif", "image/png"] }

  has_many :videos,
  primary_key: :id,
  foreign_key: :uploader_id,
  class_name: 'Video'

  has_many :comments,
  primary_key: :id,
  foreign_key: :author_id,
  class_name: 'User'

  has_many :likes

  has_many :subscriptions,
  primary_key: :id,
  foreign_key: :subscriber_id,
  class_name: 'Subscription'

  has_many :user_subscriptions,
  primary_key: :id,
  foreign_key: :subscribed_id,
  class_name: 'Subscription'

  has_many :subscribed_users,
  through: :user_subscriptions,
  source: :subscriber

  has_many :subscribed_channels,
  through: :subscriptions,
  source: :subscribed_user


  attr_reader :password

  after_initialize :ensure_session_token

  def posted_date
    time_ago_in_words(self.created_at)
  end

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)

    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64(16)
    self.save!
    self.session_token
  end

  private
  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64(16)
  end

end

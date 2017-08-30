class Video < ApplicationRecord
  validates :title, :description, presence: true
  has_attached_file :video,
    styles: { thumb: ['400x400#', :jpeg] }
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  has_many :likes

  belongs_to :uploader,
  primary_key: :id,
  foreign_key: :uploader_id,
  class_name: 'User'

  has_many :comments

  has_many :likes, as: :likeable

end

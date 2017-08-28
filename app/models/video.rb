class Video < ApplicationRecord
  validates :title, :description, presence: true
  has_attached_file :video
    # styles: { thumb: {geometry: "400x400#", format: 'jpg'} }
  validates_attachment_content_type :video, content_type: /\Avideo\/.*\z/

  belongs_to :user,
  primary_key: :id,
  foreign_key: :uploader_id,
  class_name: 'User'

end

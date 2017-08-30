class ChangeLikeIndex < ActiveRecord::Migration[5.1]
  def change
    add_index :likes, [:user_id, :likeable_id, :likeable_type], unique: true
  end
end

class CreateComments < ActiveRecord::Migration[5.1]
  def change
    create_table :comments do |t|
      t.integer :author_id, null: false
      t.text :body, null: false
      t.integer :video_id, null: false
      t.integer :parent_comment_id

      t.timestamps
    end
    add_index :comments, :parent_comment_id
    add_index :comments, :video_id
    add_index :comments, :author_id
  end
end

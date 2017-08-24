class CreateVideosTable < ActiveRecord::Migration[5.1]
  def change
    create_table :videos do |t|
      t.string :title, null: false
      t.text :description, null: false
      t.integer :uploader_id, null: false
      t.integer :views, default: 0
      t.string :category

      t.timestamps
    end
    add_index :videos, :uploader_id
  end
end

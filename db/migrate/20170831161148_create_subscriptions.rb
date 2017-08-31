class CreateSubscriptions < ActiveRecord::Migration[5.1]
  def change
    create_table :subscriptions do |t|
      t.integer :subscriber_id, null: false, index: true
      t.integer :subscribed_id, null: false, index: true

      t.timestamps
    end

    add_index :subscriptions, [:subscriber_id, :subscribed_id], unique: true
  end
end

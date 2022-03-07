class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.date :date
      t.date :arrival
      t.bool :completed
      t.references :suppliers, null: false, foreign_key: true
      t.references :parts, null: false, foreign_key: true

      t.timestamps
    end
  end
end

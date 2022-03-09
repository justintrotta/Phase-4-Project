class CreateOrders < ActiveRecord::Migration[7.0]
  def change
    create_table :orders do |t|
      t.string :date
      t.string :arrival
      t.string :manifest
      t.boolean :completed
      t.references :supplier, null: false, foreign_key: true

      t.timestamps
    end
  end
end

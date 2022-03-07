class CreateParts < ActiveRecord::Migration[7.0]
  def change
    create_table :parts do |t|
      t.string :name
      t.string :model
      t.integer :year
      t.string :price
      t.string :description
      t.references :supplier
      t.references :order

      t.timestamps
    end
  end
end

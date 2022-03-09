class CreateParts < ActiveRecord::Migration[7.0]
  def change
    create_table :parts do |t|
      t.string :name
      t.string :model
      t.string :year
      t.string :make
      t.integer :price
      t.string :description
      t.references :order

      t.timestamps
    end
  end
end

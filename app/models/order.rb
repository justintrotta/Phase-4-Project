class Order < ApplicationRecord
  belongs_to :supplier
  has_many :parts
end

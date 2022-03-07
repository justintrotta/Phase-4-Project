class OrderSerializer < ActiveModel::Serializer
  attributes :id, :date, :price
  has_one :supplier
  has_one :parts
end

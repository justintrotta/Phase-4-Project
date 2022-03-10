class OrderSerializer < ActiveModel::Serializer
  attributes :id, :date, :arrival, :completed
  has_one :supplier
  has_one :parts
end

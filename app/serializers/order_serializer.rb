class OrderSerializer < ActiveModel::Serializer
  attributes :id, :date, :arrival, :completed

end

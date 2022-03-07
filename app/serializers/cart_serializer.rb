class CartSerializer < ActiveModel::Serializer
  attributes :id, :parts
  has_one :user
end

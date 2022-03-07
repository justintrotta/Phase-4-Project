class PartSerializer < ActiveModel::Serializer
  attributes :id, :name, :model, :year, :price
end

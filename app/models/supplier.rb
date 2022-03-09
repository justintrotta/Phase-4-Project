class Supplier < ApplicationRecord
    has_many :parts
    has_many :orders
    
    validates :name, presence: true, uniqueness: true
    validates :address, uniqueness: true
end

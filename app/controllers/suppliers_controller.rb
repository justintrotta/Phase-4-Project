class SuppliersController < ApplicationController

    def create
        supplier = Supplier.create!(supplier_params)
        render json: supplier, status: :created
    end

    private

    def supplier_params
        params.permit(:name, :phone, :address)
    end
end

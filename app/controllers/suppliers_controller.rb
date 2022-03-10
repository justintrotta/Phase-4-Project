class SuppliersController < ApplicationController

    def create
        supplier = Supplier.create!(supplier_params)
        render json: supplier, status: :created
    end

    def destroy 
        supplier = Supplier.find(params[:id])
        supplier.destroy
    end

    def index 
        render json: Supplier.all
    end

    private

    def supplier_params
        params.permit(:name, :phone, :address)
    end
end

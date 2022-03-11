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

    def update
        supplier = Supplier.find(params[:id])
        supplier.update(supplier_params)
        render json: supplier
    end

    def show
        supplier = Supplier.find(params[:id])
        render json: supplier
    end
    private

    def supplier_params
        params.permit(:id, :name, :phone, :address)
    end
end

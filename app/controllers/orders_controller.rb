class OrdersController < ApplicationController

    def index
        render json: Order.all
    end

    def show
        render json: Order.find(params[:id])
    end

    def delete
        order = Order.find(params[:id])
        order.destroy
    end

    def create
        order = Order.create!(order_params)
        render json: order
    end

    private

    def order_params
        params.permit(:date, :arrival, :complete, :supplier_id, :parts_id)
    end
end

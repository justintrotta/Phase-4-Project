class OrdersController < ApplicationController

    def index
        render json: Order.all
    end

    def update
        order = Order.find(params[:id])
        order.update(order_params)
        render json: order
    end

    def show
        render json: Order.find(params[:id])
    end

    def destroy
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

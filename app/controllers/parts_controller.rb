class PartsController < ApplicationController

    skip_before_action :authorize

    def index
        render json: Part.all
    end

    def create
        part = Part.create!(part_params)
        render json: part
    end

    def destroy
        part = Part.find(params[:id])
        part.destroy
    end

    private

    def part_params
        params.require(:part).permit(:name, :model, :year, :make, :price, :supplier_id, :order_id, :description)
    end
end

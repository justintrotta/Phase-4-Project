class UsersController < ApplicationController

    before_action :authorized, only: [:show]

    def show 
        render json: @current_user
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user

    end

    private 
    def user_params
        params.permit(:name, :email, :password, :password_confirmation)
    end
end

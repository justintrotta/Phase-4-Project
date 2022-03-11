class UsersController < ApplicationController

    before_action :authorize, only: [:show]

    def show 
        user = User.find(session[:user])    
        render json: user
    end

    def create
        user = User.create(user_params)
        session[:user_id] = user.id
        render json: user

    end

    private 
    def user_params
        params.require(:user).permit(:name, :email, :password, :password_confirmation, :admin)
    end
end

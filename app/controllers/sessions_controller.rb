class SessionsController < ApplicationController

    skip_before_action :authorize

    def create
        user = User.find_by(name: params[:name])
        if user&.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        else 
            render json: {errors: {login: "Invalid username or password"}}, status: :unauthorized
        end
    end

    def destroy
        session.delete :user_id
    end
end

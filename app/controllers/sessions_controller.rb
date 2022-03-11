class SessionsController < ApplicationController

    before_action :authorize

    def create
        user = User.find_by(name: params[:name])
        if user && user.authenticate(params[:password])
            session[:user_id] = user.id
            render json: user
        end
    end

    def destroy
        session.delete :user_id
    end
end

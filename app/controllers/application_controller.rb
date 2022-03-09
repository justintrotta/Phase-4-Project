class ApplicationController < ActionController::API
    include ActionController::Cookies

    rescue_from ActiveRecord::RecordNotFound, with: :not_found
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
  
    private
  
    def not_found(error)
      render json: {error: "#{error.model} not found"}, status: :not_found
    end
  
    def invalid_record(error)
      render json: {errors: error.record.errors.full_messages}, status: :unprocessable_entity
    end
end

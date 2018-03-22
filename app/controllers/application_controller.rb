class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception 

  #In order for our controllers to respond in the json format.
  #respond_to :json

  def angular
    render 'layouts/application'
  end
end

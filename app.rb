require 'sinatra/base'
require 'sinatra/cors'
require 'rack/cors'

class Temp < Sinatra::Base 
  use Rack::Cors do |config|
    config.allow do |allow|
       allow.origins '*'
       allow.resource '/file/list_all/', :headers => :any
       allow.resource '/file/at/*',
         :methods => [:get, :post, :put, :delete],
         :headers => :any,
         :max_age => 0
       allow.resource '/compound/*',
         :methods => [:get, :post],
         :headers => :any,
         :max_age => 0
    end
  end
  
  get '/temperature' do 
    session[:temp]
  end 

  post '/temperature' do 
    session[:temp] = params[:temp]
  end

end
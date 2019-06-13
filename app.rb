require 'sinatra/base'

class Temp < Sinatra::Base 
  enable :sessions 
  
  get '/temperature' do 
    '22'
  end 
end
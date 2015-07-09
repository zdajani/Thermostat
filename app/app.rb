require 'sinatra/base'



class ThermostatApp < Sinatra::Base
  run! if app_file == $0

  get '/' do
    erb :'main/thermostat'
  end

end

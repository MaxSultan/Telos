Rails.application.routes.draw do

  namespace :api do 
    resources :referals
  end
end 

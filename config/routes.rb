Rails.application.routes.draw do

  namespace :api do 
    resources :referals do
      resources :checklists
    end
  end
end 

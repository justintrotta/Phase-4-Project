Rails.application.routes.draw do
  resources :carts
  resources :orders
  resources :suppliers
  resources :parts
  resources :users

  get "/login", to: "users#show"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy" 
  post "/signup", to: "users#create"
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

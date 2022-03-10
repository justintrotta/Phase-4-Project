Rails.application.routes.draw do
  resources :carts
  resources :orders
  resources :suppliers
  resources :parts
  resources :users

  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy'
  post '/signup' => 'user#create'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
end

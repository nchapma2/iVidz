Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :show, :index, :edit]
    resources :comments, only: [:create, :show, :destroy, :edit, :index]
    resources :likes, only: [:create, :index, :destroy]
  end

  get 'api/session', to: 'api/sessions#check'
end

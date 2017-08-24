Rails.application.routes.draw do

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create, :show]
    resource :session, only: [:create, :destroy]
    resources :videos, only: [:create, :show, :index, :edit]
  end

  get 'api/session', :to => 'api/sessions#check'
end

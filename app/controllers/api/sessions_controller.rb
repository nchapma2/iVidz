class Api::SessionsController < ApplicationController

  def check
    user = User.find_by(username: params[:user][:username])

    if !user
      render json: ['That username does not exist'], status: 422
    else
      render json: {username: user.username}
    end
  end

  def create
    @user = User.find_by_credentials(params[:user][:username],
    params[:user][:password])

    if @user
      login!(@user)
      render 'api/users/show'
    else
      render json: ['Invalid username or password'], status: 422
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render json: {}
    else
      render json: ["Nobody signed in"], status: 404
    end
  end
end

class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    @like.user_id = current_user.id

    if @like.save
      render json: @like
    else
      render json: @like.errors.full_messages, status: 422
    end
  end


  def index
    video = Video.find(params[:videoId])
    @likes = video.likes
    render json: @likes
  end

  def destroy
    like = Like.find(params[:id])
    like.destroy
    render json: like
  end

  private

  def like_params
    params.require(:like).permit(:likeable_id, :likeable_type)
  end

end

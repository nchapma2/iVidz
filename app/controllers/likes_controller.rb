class LikesController < ApplicationController

  def create
    video = Video.find(params[:videoId])
    @like = Like.new
    @like.video_id = video.id
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


end

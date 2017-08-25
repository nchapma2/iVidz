class Api::VideosController < ApplicationController

  def index
    # This will be changed when I figure out how to filter videos
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end

  def create
    @video = Video.new(video_params)
    @video.uploader_id = current_user.id

    if @video.save
      render "api/videos/#{@video.id}"
    else
      render json: @video.errors.full_messages, status: 422
    end
  end

  def edit

  end

  private

  def video_params
    params.require(:video).permit(:title, :description,
    :category, :views)
  end

end

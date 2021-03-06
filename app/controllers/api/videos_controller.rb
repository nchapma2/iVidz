class Api::VideosController < ApplicationController

  def index
    if !params[:video]
      @videos = Video.all.shuffle
    else
      @videos = Video.search_by_content(video_params[:searchTerm])
    end
  end

  def show
    @video = Video.find(params[:id])
  end

  def create
    @video = Video.new(video_params)
    @video.uploader_id = current_user.id

    if @video.save
      render :show
    else
      render json: @video.errors.full_messages, status: 422
    end
  end


  private

  def video_params
    params.require(:video).permit(:title, :description,
    :category, :views, :video, :searchTerm)
  end

end

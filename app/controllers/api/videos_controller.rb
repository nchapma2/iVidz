class Api::VideosController < ApplicationController

  def index
    # This will be changed when I figure out how to filter videos
    @videos = Video.all
  end

  def show
    @video = Video.find(params[:id])
  end

  def create

  end

  def edit

  end

  private

  def video_params
    params.require(:video).permit(:title, :description, :uploader_id,
    :category, :views)
  end

end

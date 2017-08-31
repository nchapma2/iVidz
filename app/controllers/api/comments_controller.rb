class Api::CommentsController < ApplicationController

  def index
    video = Video.find(params[:videoId])
    @comments = video.comments
    render :index
  end

  def show
    @comment = Comment.find(params[:id])
  end

  def create
    @comment = Comment.new(comment_params)
    @comment.author_id = current_user.id

    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def edit

  end

  def destroy
    @comment = Comment.find(params[:id])
    if @comment.author_id == current_user.id
      @comment.delete
      render json: {}
    end
  end


  private

  def comment_params
    params.require(:comment).permit(:body, :parent_comment_id, :video_id)
  end
end

class Api::CommentsController < ApplicationController

  def index
    @comments = Comment.all
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
    params.require(:comment).permit(:body, :parent_comment_id)
  end
end

class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new(sub_params)
    @subscription.subscriber_id = current_user.id

    if @subscription.save
      render :show
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def show
    @subscription = Subscription.find(params[:id])
    render :show
  end

  def index

  end

  def destroy
    @subscription = Subscription.find(params[:id])
    @subscription.destroy
    render :show
  end

  private

  def sub_params
    params.require(:subscription).permit(:id, :subscribed_id)
  end
end

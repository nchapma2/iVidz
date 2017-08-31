class Api::SubscriptionsController < ApplicationController

  def create
    @subscription = Subscription.new(sub_params)
    @subscription.subscriber_id = current_user.id

    if @subscription.save
      render json: @subscription
    else
      render json: @subscription.errors.full_messages, status: 422
    end
  end

  def index

  end

  def destroy
    sub = Subscription.find(params[:id])
    sub.destroy
    render json: sub
  end

  private

  def sub_params
    params.require(:subscription).permit(:subscribed_id)
  end
end

class TasksController < ApplicationController
    def index
        respond_with Task.all
    end

    def create
        respond_with Task.create(post_params)
    end

    def show
        respond_with Task.find(params[:id])
    end

    def destroy
        respond_with Task.destroy(params[:id])
    end

    private
    def post_params
        params.require(:task).permit(:title, :description)
    end
end

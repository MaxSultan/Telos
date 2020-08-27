class Api::ChecklistsController < ApplicationController

    def update
        @checklist.update(checklist_params)
        if @checklist.save
            render json: @checklist
        else
            render json: {errors: @checklist.errors, status: 422}
        end 
    end 

    private

    def set_checklist
        @checklist = Checklist.find(params[:referal_id])
    end 
end

class Api::ChecklistsController < ApplicationController
    before_action :set_checklist, only: [:update, :show]

    def index
        referal = Referal.find(params[:referal_id])
        render json: referal.checklist
    end 

    def show 
    end 

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
        @checklist = Checklist.find(params[:id])
    end 

    def checklist_params
        params.require(:checklist).permit(
            :completed_app,
            :edcon_call,
            :enrollment,
            :inform_team,
            :parent_call,
            :parents,
            :recieve_testing,
            :review_testing,
            :staffing,
            :steps_to_enroll,
            :submitted_docs,
            :team_assigned,
            :telos_hq,
            :tour_scheduled,
            :vetting,
            :w_therapist_call
        )  
    end 
end

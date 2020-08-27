class Api::ReferalsController < ApplicationController
    before_action :set_referal, only: [:show, :update, :destroy]

    def index
        render json: Referal.all
    end 

    def show
        render json: @referal
    end 

    def create
        referal = Referal.new(referal_params)
        if referal.save
            @checklist = Checklist.create(
                 vetting: false,
                 recieve_testing: false,
                 review_testing: false,
                 edcon_call: false,
                 w_therapist_call: false,
                 staffing: false,
                 parents: false,
                 parent_call: false,
                 tour_scheduled: false,
                 steps_to_enroll: false,
                 completed_app: false,
                 submitted_docs: false,
                 enrollment: false,
                 inform_team: false,
                 team_assigned: false,
                 telos_hq: false,
            )
            referal.checklist =  @checklist
            render json: referal
        else
            render json: {errors: referal.errors, status: 422}
        end 
    end 

    def update
        @referal.update(referal_params)
        if @referal.save
            render json: @referal
        else
            render json: {errors: @referal.errors, status: 422}
        end 
    end 

    def destroy 
        render json: @referal.destroy
    end 

    private

    def set_referal
        @referal = Referal.find(params[:id])
    end 

    def referal_params
        params.require(:referal).permit(
            :f_name ,
            :l_name ,
            :source ,
            :ed_con ,
            :therapist ,
            :w_therapist ,
            :status ,
            :color ,
            :result
        )
    end 
end

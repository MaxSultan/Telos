class Api::ReferalsController < ApplicationController
    before_action :set_referal, only: [:show, :edit, :destroy]

    def index
        render json: Referal.all
    end 

    def show
        render json: referal
    end 

    def create
        referal = Referal.new(referal_params)
        if referal.save
            render json: referal
        else
            render json: {errors: referal.errors, status: 422}
        end 
    end 

    def edit
        referal.update(referal_params)
        if referal.save
            render json: referal
        else
            render json: {errors: referal.errors, status: 422}
        end 
    end 

    def destroy 
        render json: referal.destroy
    end 

    private

    def set_referal
        referal = Referal.find(params[:id])
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

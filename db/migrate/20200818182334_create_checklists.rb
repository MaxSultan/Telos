class CreateChecklists < ActiveRecord::Migration[6.0]
  def change
    create_table :checklists do |t|
      t.boolean :vetting
      t.boolean :recieve_testing
      t.boolean :review_testing
      t.boolean :edcon_call
      t.boolean :w_therapist_call
      t.boolean :staffing
      t.boolean :parents
      t.boolean :parent_call
      t.boolean :tour_scheduled
      t.boolean :steps_to_enroll
      t.boolean :completed_app
      t.boolean :submitted_docs
      t.boolean :enrollment
      t.boolean :inform_team
      t.boolean :team_assigned
      t.boolean :telos_hq
      t.belongs_to :referal, null: false, foreign_key: true

      t.timestamps
    end
  end
end

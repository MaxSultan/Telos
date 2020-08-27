# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_08_18_182334) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "checklists", force: :cascade do |t|
    t.boolean "vetting"
    t.boolean "recieve_testing"
    t.boolean "review_testing"
    t.boolean "edcon_call"
    t.boolean "w_therapist_call"
    t.boolean "staffing"
    t.boolean "parents"
    t.boolean "parent_call"
    t.boolean "tour_scheduled"
    t.boolean "steps_to_enroll"
    t.boolean "completed_app"
    t.boolean "submitted_docs"
    t.boolean "enrollment"
    t.boolean "inform_team"
    t.boolean "team_assigned"
    t.boolean "telos_hq"
    t.bigint "referal_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["referal_id"], name: "index_checklists_on_referal_id"
  end

  create_table "referals", force: :cascade do |t|
    t.string "f_name"
    t.string "l_name"
    t.string "source"
    t.string "ed_con"
    t.string "therapist"
    t.string "w_therapist"
    t.string "status"
    t.string "color"
    t.string "result"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "checklists", "referals"
end

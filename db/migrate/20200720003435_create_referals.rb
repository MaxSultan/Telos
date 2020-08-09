class CreateReferals < ActiveRecord::Migration[6.0]
  def change
    create_table :referals do |t|
      t.string :f_name
      t.string :l_name
      t.string :source
      t.string :ed_con
      t.string :therapist
      t.string :w_therapist
      t.string :status
      t.string :color
      t.string :result

      t.timestamps
    end
  end
end

class Checklist < ApplicationRecord
  belongs_to :referal, dependent: :destroy
end

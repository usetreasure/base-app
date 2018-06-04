class User < ApplicationRecord
  rolify
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable

  def self.new_user_with_generated_password(params)
    generated_password = Devise.friendly_token.first(12)
    params[:password] = generated_password
    params[:password_confirmation] = generated_password

    return self.new(params)
  end
end

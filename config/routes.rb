Rails.application.routes.draw do
  devise_for :users,
             :controllers => {sessions: 'sessions'},
             path: '',
             path_names: { sign_in: 'login', sign_out: 'logout' }

  root 'home#index'
  match "*path", to: 'home#react', via: :get # catch all react routes
end

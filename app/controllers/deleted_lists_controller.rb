class DeletedListsController < ApplicationController

    def deleted_marked
        @marked = List.where(:completed => true).destroy_all
        redirect_to root_path
    end

end
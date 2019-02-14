"use strict";

const postform = {
    bindings: {
        showForm: "&",
        formToggle: "<",
        addPost: "&"
        
    },
    templateUrl: "app/postform.html",

}

angular
.module("SocialApp")
.component("postform", postform)
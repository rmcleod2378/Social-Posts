"use strict";
const post = {
    bindings: { 
        removePost: "&",
        postLibrary: "<"
},

templateUrl: "app/posts.html"
}

angular
.module("SocialApp")
.component("post", post)



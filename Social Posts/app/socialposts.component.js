"use strict";

const socialposts = {
    templateUrl: "app/socialposts.html",
    controller: [function(){
        const vm = this;
        vm.formToggle = false;
        vm.postLibrary = [
            {title: "Today", thought: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate debitis, reprehenderit labore sed dolores tempore cumque commodi vel nesciunt, illo ex magni beatae culpa unde esse temporibus corporis! Vero."},
            {title: "Tomorrow", thought: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat voluptate debitis, reprehenderit labore sed dolores tempore cumque commodi vel nesciunt, illo ex magni beatae culpa unde esse temporibus corporis! Vero."},
            {title: "Yesterday", thought: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto laboriosam nostrum sint suscipit consectetur consequatur repellendus ullam nemo ipsam voluptates eveniet, quae tenetur ipsum. Ullam quisquam cum possimus minus laudantium."}
            
        ];
        vm.addPost = function(newPost){
            vm.postLibrary.push({...newPost});
            vm.formToggle = false;
            
        }
        vm.removePost = function(index){
            vm.postLibrary.splice(index, 1)
        }
        vm.showForm = function(){
            vm.formToggle = true;

        }
     }]
}

angular
.module("SocialApp")
.component("socialposts", socialposts)

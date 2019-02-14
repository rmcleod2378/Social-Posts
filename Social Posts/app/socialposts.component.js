"use strict";

const socialposts = {
    templateUrl: "app/socialposts.html",
    controller: [function(){
        const vm = this;
        vm.formToggle = false;
        vm.postLibrary = [
            {title: "Today", thought: "Awesome"},
            {title: "Tomorrow", thought: "Moving On"},
            {title: "Yesterday", thought: "Forget It"}
            
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

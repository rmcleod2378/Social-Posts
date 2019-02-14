"use strict";

function expand() {
    return {
        restrict: "A",

        link: function($scope, $element, $attrs) {
            $element.on("focus", function(){
                $element.css("transform", "scale(2, 2)");
                $element.css("transform-origin", "left");
            });
        
            $element.on("blur", function(){
                $element.css("transform", "");
                
        });
    
        }
    }
}

angular
.module("SocialApp")
.directive("expand", expand);
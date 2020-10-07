// (function(){
// 'use strict';
// var x = "hello";
// angular.module('myFirstApp',[])
// // .controller('MyFirstController',['$scope','$filter',DIController]);
// .controller('MyFirstController',DIController);
// DIController.$inject =['$scope','$filter'];
// function DIController($scope,$filter,$injector){
//
//   $scope.giveMeFeedback = function()
//   {
//     if($scope.items == undefined)
//     {
//       $scope.output="Please enter data first";
//     }
//     else {
//       var str = $scope.items.split(',')
//       if(str.length<=3)
//       {
//         $scope.output="Enjoy!";
//       }
//       if(str.length >3)
//       {
//         $scope.output="Too much!";
//       }
//     }
//   };
//   // console.log($injector.annotate(DIController));
// };
// })();
//
// // function annotateMe(name,job,blah)
// // {
// //   return "blah!";
// // }
// // console.log(annotateMe.toString());
// //!function(){"use strict";angular.module("myFirstApp",[]).controller("MyFirstController",["$scope","$filter",function(e,n,r){e.name="Yaakov",e.upper=function(){var r=n("uppercase");e.name=r(e.name)}}])}();
!function(){"use strict";function t(t,e,n){t.giveMeFeedback=function(){if(null==t.items)t.output="Please enter data first";else{var e=t.items.split(",");e.length<=3&&(t.output="Enjoy!"),e.length>3&&(t.output="Too much!")}}}angular.module("myFirstApp",[]).controller("MyFirstController",t),t.$inject=["$scope","$filter"]}();

var app=angular.module('messApp', []);
app.controller('MainController', ['$http', function($http){
    var vm=this;
    var array=[];

    vm.messages=[];
    vm.message='';

vm.sendMessage=function(){
  console.log(vm.message);
  vm.message='';

}
}])
// vm.sendMessage=function(){
//   console.log(vm.message);
//   vm.getMessages();
//
// }



// $scope.messageClear=function(append){
//   console.log(append);
// }

// }
// })



// var app=angular.module('messApp', []);
// app.controller('MainController', function($scope){
//     console.log('controller has loaded');
//
// $scope.messages="";
// $scope.message="";
//
// $scope.sendMessage=function(anything){
//   console.log(anything);
//   console.log('message is now', $scope.messages);
//   $scope.messages.push($scope.messages);
//   $scope.message="";
// }
// })
// // $scope.messageClear=function(append){
// //   console.log(append);
// // }
//
// // }
// // })

angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout, Friends) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  }

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    var friends = Friends.all();

    console.log("Friends 0 - "+friends[0].name);
    console.log("Friends 1 - "+friends[1].name);
    console.log("Friends 2 - "+friends[2].name);
    console.log("Friends 3 - "+friends[3].name);

    console.log("Friends get 2 - "+Friends.get(2).name);



    //See if login exists
    //Parse.initialize("1pmgu78oEOgPRzEUBQzHPcpmPIwvutl1w8W68QNK", "IzB3ivb0px9HV6ZMYVsX7DjbjhvywC1LrtBUKUqN");

    //Return of does
    //Bring up Registration if not registered


    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };

  // Perform the login action when the user submits the login form
  $scope.doForgotPassword = function() {
    console.log('doForgotPassword', $scope.loginData);


    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('HomeCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})
.controller('RegistrationCtrl', function($scope) {
  $scope.registration = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
})

//.factory('Friends', function() {
//  // Might use a resource here that returns a JSON array
//
//  // Some fake testing data
//  var friends = [
//    { id: 0, name: 'Scruff McGruff' },
//    { id: 1, name: 'G.I. Joe' },
//    { id: 2, name: 'Miss Frizzle' },
//    { id: 3, name: 'Ash Ketchum' }
//  ];
//
//  return {
//    all: function() {
//      return friends;
//    },
//    get: function(friendId) {
//      // Simple index lookup
//      return friends[friendId];
//    }
//  }
//});

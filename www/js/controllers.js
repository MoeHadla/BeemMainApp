/// <reference path="../lib/ionic/js/angular/angular.js" />
/// <reference path="../js/parse.min.js" />


angular.module('beem.controllers', [])

.controller('LoginController', function ($scope) {
    //$scrop.test = 'Hello';
    //alert(1234);


    $scope.RegisterUser = function () {
        
        ////var newUser = new Parse.User();
        //var user = Parse.User.current();

        ////user.set("LastName", "new Last Name");
        ////user.save();

        //var role = new Parse.Role();

        //role.setName("Salon");
        //role.save(null, {
        //    success: function () { console.log("Success"); },
        //    error: function (error) { console.log(error)}
        //});

        //user.set("Role", role);
        //user.save();
        
        //*******Creating a new Role Code *******///
        //var roleACL = new Parse.ACL();
        //roleACL.setPublicReadAccess(true);
        //var role = new Parse.Role("Salon", roleACL);
        //role.save();
        //*******Creating a new Role Code *******///

        //var roleACL = new Parse.ACL();
        //roleACL.setPublicReadAccess(true);
        //var role = new Parse.Role.fetchAll(   //.Role("Salon123", roleACL);
        //role.getUsers().add(Parse.User.current());
        //////role.getRoles().add(rolesToAddToRole);
        //role.save(null, {
        //    success: function () { console.log("Success")},
        //    error: function (error) { console.log(error); }
        //});


        var Role = Parse.Object.extend("_Role"); 
        var query = new Parse.Query(Role); 
        query.equalTo("name", "Salon"); 
        query.first({
            success: function (results) {
                results.getUsers().add(Parse.User.current());
                results.save();
                //console.log(results);

            }
        });


        //var query = (new Parse.Query(Parse.Role));
        //query.equalTo("name", "Salon");
        //query.first().then(function (Role) {
        //    console.log(Role.getUsers().add(Parse.User.current()));

        //    //            console.log(Role.getName());
        //});


        //******* Adding Users to the role *******///
        //var role = new (Parse.Role.extend("Salon"));
        //console.log(role.getName());
        //role.getUsers().add(Parse.User.current());
        //role.getRoles().add(Parse.User.current());
        //role.save();
        //******* Adding Users to the role *******///


        //newUser.set('FirstName', this.FirstName);
        //newUser.set('LastName', this.LastName);
        //newUser.set('email', this.Email);
        //newUser.set('username', this.UserName);
        //newUser.set('password', this.pass);

        //newUser.signUp(null, {
        //    success: function () {
        //        alert('Greast');
        //    },
        //    error: function (error) {
        //        window.error = error
        //    }
        //});
    }
});
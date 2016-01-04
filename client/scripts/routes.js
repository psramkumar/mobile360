angular
    .module('Mobile360')
    .config(config);

function config($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'client/templates/login.html',
            controller: 'LoginCtrl as logger',
            resolve: {
                user() {
                    return Meteor.user();
                }
            }
        })
        .state('tab.profile', {
            url: '/profile',
            templateUrl: 'client/templates/profile.html',
            controller: 'ProfileCtrl as profile',
            resolve: {
                user() {
                    return Meteor.user();
                }
            }
        })
        .state('tab.settings', {
            url: '/settings',
            views: {
                'tab-settings': {
                    templateUrl: 'client/templates/settings.html',
                    controller: 'SettingsCtrl as settings'
                }
            }
        });
    $urlRouterProvider.otherwise('login');
}

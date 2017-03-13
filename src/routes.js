module.exports = routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('app', {
      url: '/',
      redirectTo: 'main',
      component: 'app'
    })

    .state('main', {
      parent: 'app',
      component: 'main'
    })

    // pageMain
    .state('pagemain', {
      parent: 'app',
      redirectTo: 'pages'
    })
    .state('pages', {
      parent: 'app',
      url: 'pages',
      component: 'pagemain'
    })
    // /lobby///
    .state('lobbyAccio', {
      parent: 'pages',
      url: '/lobbyAccio',
      component: 'lobbyAccio'
    })
    // /rest///
    .state('restRoomAccio', {
      parent: 'pages',
      url: '/restRoomAccio',
      component: 'restRoomAccio'
    });
}

Meteor.methods({
  listBoards (message) {
    if (!this.userId) {
      throw new Meteor.Error('not-logged-in',
        'Must be logged in to send message.');
    }
    return [
          {
            boardName: 'My IBX(s)',
            displayName: 'eq-m-feature-my-ibx',
            className: 'eq-m-feature-my-ibx',
            routeId:  'boards/eq-m-feature-my-ibx'
          }, {
            boardName: 'Orders',
            displayName: 'eq-m-feature-orders',
            className: 'eq-m-feature-orders',
            routeId: 'boards/eq-m-feature-orders'
          }, {
            boardName: 'Ports',
            displayName: 'eq-m-feature-ports',
            className: 'eq-m-feature-ports',
            routeId: 'boards/eq-m-feature-ports'
          }, {
            boardName: 'Assets',
            displayName: 'eq-m-feature-assets',
            className: 'eq-m-feature-assets',
            routeId: 'boards/eq-m-feature-assets'
          }
    ];
  }
});

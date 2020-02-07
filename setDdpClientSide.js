Meteor.startup(() => {
    if (typeof customDdpConnection == 'undefined') customDdpConnection = {};

    let backendUrl = __meteor_runtime_config__.BACKEND_URL;

    if (backendUrl) {
        customDdpConnection.originalConnection = Meteor.connection;

        // Accounts is already connected to our BACKEND_URL
        customDdpConnection.backendConnection = Accounts.connection;
        // Reusing same (authenticated) connection for method calls and subscriptions
        Meteor.connection = customDdpConnection.backendConnection;

        _.each(['subscribe', 'methods', 'call', 'apply', 'status', 'reconnect', 'disconnect'], function (name) {
            Meteor[name] = _.bind(Meteor.connection[name], Meteor.connection);           
        });

        console.log(' ### Connected to backend', customDdpConnection);
        }

})
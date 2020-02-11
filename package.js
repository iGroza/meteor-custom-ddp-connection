Package.describe({
  name: 'xneon:ddp-backend',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'setup your env variable "BACKEND_URL" for connect to another backend server  ',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/iGroza/meteor-custom-ddp-connection.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.6.1.2');
  api.use('ecmascript');
  api.use('meteor');
  api.use('mongo');
  api.use('accounts-base');
  api.use('underscore');
  api.mainModule('setDdpClientSide.js', 'client');
  api.mainModule('setDdpServerSide.js', 'server');
});

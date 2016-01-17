Package.describe({
  name: "angular-legacy-with-blaze",
  summary: "Everything you need to use both AngularJS and Blaze templates in your Meteor app",
  version: "1.0.0",
  git: "https://github.com/Urigo/angular-meteor-legacy.git",
  documentation: "../../README.md"
});

Package.onUse(function (api) {
  api.versionsFrom('METEOR@1.2.0.1');

  api.imply([
    'angular-meteor-legacy-data@0.0.1',
    'angular-blaze-templates-compiler@0.0.1'
  ])
});

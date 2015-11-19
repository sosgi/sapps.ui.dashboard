System.register(['sapps.ui.api', './app'], function (_export) {
    'use strict';

    var IApp, App, app;

    _export('start', start);

    _export('stop', stop);

    function start(ctx) {
        app = new App();
        app.start(ctx);
        ctx.services.register(IApp, app, {
            name: 'dashboard',
            url: '/',
            label: 'Dashboard'
        });
    }

    function stop(ctx) {
        app.stop();
        app = null;
    }

    return {
        setters: [function (_sappsUiApi) {
            IApp = _sappsUiApi.IApp;
        }, function (_app) {
            App = _app['default'];
        }],
        execute: function () {}
    };
});
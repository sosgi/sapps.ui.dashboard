System.register(['./main.html!text'], function (_export) {
    'use strict';

    var TPL, UI, App;

    var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    return {
        setters: [function (_mainHtmlText) {
            TPL = _mainHtmlText['default'];
        }],
        execute: function () {
            UI = (function () {
                function UI() {
                    _classCallCheck(this, UI);
                }

                _createClass(UI, [{
                    key: 'show',
                    value: function show($dom) {
                        if (!this.$div) {
                            this.$div = document.createElement('div');
                            this.$div.innerHTML = TPL.trim();
                            $dom.appendChild(this.$div);
                        }
                        this.$div.classList.add('show');
                    }
                }, {
                    key: 'hide',
                    value: function hide() {
                        this.$div.parentNode.removeChild(this.$div);
                        this.$div = null;
                    }
                }, {
                    key: 'remove',
                    value: function remove() {
                        if (this.$div) {
                            this.$div.parentNode.removeChild(this.$div);
                            this.$div = null;
                        }
                    }
                }, {
                    key: 'reload',
                    value: function reload() {
                        console.log('refresh');
                    }
                }]);

                return UI;
            })();

            App = (function () {
                function App() {
                    _classCallCheck(this, App);
                }

                _createClass(App, [{
                    key: 'start',
                    value: function start(ctx) {
                        this.ui = new UI();
                    }
                }, {
                    key: 'stop',
                    value: function stop() {
                        this.ui.remove();
                        this.ui = null;
                    }
                }, {
                    key: 'show',
                    value: function show($dom) {
                        console.log('Show dashboard');
                        this.ui.show($dom);
                    }
                }, {
                    key: 'hide',
                    value: function hide() {
                        console.log('Hide dashboard');
                        this.ui.hide();
                    }
                }, {
                    key: 'reload',
                    value: function reload() {
                        console.log('Reload dashboard');
                        this.ui.reload();
                    }
                }, {
                    key: 'name',
                    get: function get() {
                        return 'dashboard';
                    }
                }]);

                return App;
            })();

            _export('default', App);
        }
    };
});
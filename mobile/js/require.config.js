"use strict";
//require
var module = {
    baseUrl: '../js',
    waitSeconds: 200,
    paths: {
        // major library
        'jquery': 'lib/jquery.ui.min',
        'jquery-ui':'lib/jquery.ui',
        'jquery-swipe':'lib/jquery.event.swipe',
        //es5 File
        //'es5': 'lib/es5-sham',
        //babel
        'babel': 'lib/babel',
        //slider
        'bxSlider':'lib/bxSlider',
        //quickScroller
        'quickScroller':'lib/quickScroller',
        'iePlaceholder':'lib/placeholder',
        //ajax
        'ajax':'functions/ajaxFrame',
        'uiAction':'functions/uiFrame',

        //page modules
        'layout':'layout',
        'main':'pages/index'
    },
    //의존성 관리 라이브러리 플러그인 별 의존성 추가
    shim:{
        // 'es5': {
        //     deps: ['babel']
        // },
        'bxSlider':{
              deps: ['jquery']
        },
        'quickScroller':{
              deps: ['jquery']
        },
        'ajax':{
            deps:['jquery']
        },
        'jquery-ui': {
            deps:['jquery']
        },
        'uiAction':{
            deps:['jquery','jquery-ui','ajax','bxSlider','quickScroller','jquery-swipe']
        },
        //pages
        'layout': {
            deps:['uiAction']
        },
        'main':{
            deps:['layout']
        },
        'sub':{
            deps:['layout']
        },
        'aside':{
            deps:['aside']
        }
    }
};
//설정 호출 함수
function startJs () {
    requirejs.config(
        module
    );
};

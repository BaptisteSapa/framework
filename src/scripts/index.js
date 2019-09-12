// ---------------------------------------- //
//      ANCHOR -- require and imports
// ---------------------------------------- //

const css = require('../styles/index.sass')

import LocomotiveScroll from 'locomotive-scroll'
import { TimelineMax } from 'gsap'
import loader from './loader.js'
import nav from './nav.js'

// ---------------------------------------- //
//      ANCHOR -- dom ready (just need to load the files)
// ---------------------------------------- //

document.addEventListener('DOMContentLoaded', () => {

    // -- smooth scroll is automatically disable on mobile -- //
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#js-scroll'),
        smooth: true,
        repeat: true
    })

    // ---------------------------------------- //
    //      ANCHOR -- variables
    // ---------------------------------------- //
    let pageIAm = 'will_set'
    let pageIComeFrom = 'will_set'
    const pageTransitionElement = document.querySelectorAll('#page__transition .page__transition__element')

    // ---------------------------------------- //
    //      ANCHOR -- urls routes i am in
    // ---------------------------------------- //

    function iAmIn() {
        if (window.location.pathname.match('page') != null) {
            pageIAm = 'page'
        } else {
            pageIAm = 'homepage'
        }
        return pageIAm
    }

    // ---------------------------------------- //
    //      ANCHOR -- urls routes i come from
    // ---------------------------------------- //

    function iComeFrom() {
        if (window.location.pathname.match('page') != null) {
            pageIComeFrom = 'page'
        } else {
            pageIComeFrom = 'homepage'
        }
        return pageIComeFrom
    }

    // ---------------------------------------- //
    //      ANCHOR -- global initizalization of scripts
    // ---------------------------------------- //

    if (document.readyState === 'loading') {
        console.log('error')
    } else {
        initScripts()
    };

    // ---------------------------------------- //
    //      ANCHOR -- initizalization of scripts per page
    // ---------------------------------------- //

    function initScripts() {
        if (iAmIn() == 'homepage') {
            nav()
            iComeFrom()
        }
        if (iAmIn() == 'page') {
            nav()
            iComeFrom()
        }
    };

    // ---------------------------------------- //
    //      ANCHOR -- trigger all resources on load
    // ---------------------------------------- //

    window.addEventListener('load', function (event) {
        loader()
        nav()
        iComeFrom()
        Barba.Pjax.start()
    });

    // ---------------------------------------- //
    //      ANCHOR -- transition 1
    // ---------------------------------------- //

    let transitionToHome = Barba.BaseTransition.extend({
        start: function () {
            Promise
                .all([this.newContainerLoading, this.startTransition()])
                .then(this.finishTransition.bind(this));
        },
        startTransition: function () {
            let transitionPromise = new Promise(function (resolve, reject) {
                const loadTransition = new TimelineMax({ onComplete: function () { resolve(); } });
                loadTransition.set(pageTransitionElement, { display: 'block', y: '100%', backgroundColor: '#0074d9' }, '-=.8');
                loadTransition.staggerTo(pageTransitionElement, 0.75, { y: '-100%', ease: Sine.easeInOut }, 0.075, 'loading+=0.1');
            });
            return transitionPromise;
        },
        finishTransition: function () {
            const target = document.querySelector('#js-scroll');
            scroll.scrollTo(target);
            scroll.destroy();
            const unloadTransition = new TimelineMax({});
            unloadTransition.staggerTo(pageTransitionElement, 0.75, { y: '100%' }, 0.075, 'unloading+=2.5');
            this.done();
            initScripts();
            scroll.init();
        }
    });

    // ---------------------------------------- //
    //      ANCHOR -- transition 2
    // ---------------------------------------- //

    let transitionToProject = Barba.BaseTransition.extend({
        start: function () {
            Promise
                .all([this.newContainerLoading, this.startTransition()])
                .then(this.finishTransition.bind(this));
        },
        startTransition: function () {
            let transitionPromise = new Promise(function (resolve, reject) {
                const loadTransition = new TimelineMax({ onComplete: function () { resolve(); } });
                loadTransition.set(pageTransitionElement, { display: 'block', y: '100%', backgroundColor: '#01ff70' }, '-=.8');
                loadTransition.staggerTo(pageTransitionElement, 0.75, { y: '-100%', ease: Sine.easeInOut }, 0.075, 'loading+=0.1');
            });
            return transitionPromise;
        },
        finishTransition: function () {
            const target = document.querySelector('#js-scroll');
            scroll.scrollTo(target);
            scroll.destroy();
            const unloadTransition = new TimelineMax({});
            unloadTransition.staggerTo(pageTransitionElement, 0.75, { y: '100%' }, 0.075, 'unloading+=2.5')
            this.done();
            initScripts();
            scroll.init();
        }
    });

    // ---------------------------------------- //
    //      ANCHOR -- transition routes
    // ---------------------------------------- //

    Barba.Pjax.getTransition = function () {
        console.log('i come from ' + pageIComeFrom);
        console.log('i am heading to ' + iAmIn())
        if (iAmIn() == 'homepage') {
            return transitionToHome;
        } if (pageIComeFrom == 'homepage' && iAmIn() == 'page') {
            return transitionToProject;
        } if (pageIComeFrom == 'page' && iAmIn() == 'homepage') {
            return transitionToProject;
        }
        return transitionToHome;
    };

    // ---------------------------------------- //
    //      ANCHOR -- back button fix
    // ---------------------------------------- //
    Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container) {
        history.scrollRestoration = 'manual';
    });

})

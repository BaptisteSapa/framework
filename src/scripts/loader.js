export default function loader() {

    // ---------------------------------------- //
    //      ANCHOR -- loader in
    // ---------------------------------------- //

    function loaderIn() {
        const loaderInTl = new TimelineMax();
        loaderInTl.to(document.querySelector('#loader'), .2, { autoAlpha: 1, ease: Power2.easeInOut });
        loaderInTl.to(document.querySelector('#loader .loader__element'), .3, {
            autoAlpha: 1, ease: Power2.easeInOut, onComplete: function () { loaderOut(); }
        });
    }

    // ---------------------------------------- //
    //      ANCHOR -- loader out
    // ---------------------------------------- //

    function loaderOut() {
        const loaderOutTl = new TimelineMax();
        loaderOutTl.to(document.querySelector('.loader__element'), .5, { autoAlpha: 0, ease: Power2.easeInOut }, .1);
        // loaderOutTl.set(document.querySelector('main'), { className: '-=is_loading' });
        loaderOutTl.to(document.querySelector('#loader'), .7, { yPercent: -100, ease: Power2.easeInOut });
        loaderOutTl.set(document.querySelector('#loader'), { className: '+=is_hidden' });
    }
    loaderIn();

}
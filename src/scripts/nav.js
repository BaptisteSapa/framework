export default function nav() {

    const navTl = new TimelineMax({ reversed: true, paused: true })
    navTl.fromTo(document.querySelector('.section__nav .section__container .section__content div:first-of-type span:first-of-type'), .2, { y: 0, rotation: 0 }, { y: 3, rotation: 135, ease: Sine.easeInOut }, 0)
    navTl.fromTo(document.querySelector('.section__nav .section__container .section__content div:first-of-type span:last-of-type'), .2, { y: 0, rotation: 0 }, { y: -3, rotation: 45, ease: Sine.easeInOut }, 0)
    navTl.to(document.querySelector('.section__nav .section__container .section__content div:nth-of-type(2)'), .4, { autoAlpha: 1, ease: Sine.easeInOut }, 0)
    navTl.to(document.querySelector('.section__nav .section__container .section__content div:last-of-type'), .4, { autoAlpha: 1, ease: Sine.easeInOut }, 0)

    document.querySelector('.section__nav .section__container .section__content div:first-of-type').addEventListener('click', (e) => {
        navTl.reversed() ? navTl.play() : navTl.reverse()
    })

    document.querySelector('.section__nav .section__container .section__content div:last-of-type').addEventListener('click', (e) => {
        navTl.reversed() ? navTl.play() : navTl.reverse()
    })


}
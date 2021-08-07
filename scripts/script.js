function importElement(elementId, elementSourceHTML){
    $('#' + elementId).load(elementSourceHTML);
}
importElement('footer', 'components/footer.html');
importElement('header', 'components/nav-bar.html');


function load(element) {
    gsap.fromTo(
        element,
        {
            opacity: 0,
            y: 100
        },
        {
            duration: 1.5,
            opacity: 1,
            y: 0,
            ease: 'power1'
        }
    )
};

function loadOnReach (element) {
    let target = document.querySelector(element);
    var elementNotCalled = true;
    gsap.set(element,{
        opacity: 0,
    });
    window.addEventListener('scroll', () => {
        if (window.scrollY + window.innerHeight > target.offsetTop && elementNotCalled){
          elementNotCalled = false;
          load(element)
        }
      });
}


loadOnReach('#professional')
loadOnReach('#qualifications')
loadOnReach('#academical')

gsap.from("header", {
    duration: 1.5, 
    opacity: 0,
    y: -50,
    ease: 'power4'
});

gsap.from(".profile img",{
    duration: 1.5,
    x:-200,
    opacity: 0,
    ease: 'power1'
});

gsap.from(".profile-info h1",{
    duration: 1,
    y: -50,
    opacity: 0,
    ease: 'power1'
});

gsap.from(".profile-info p",{
    duration: 1.5,
    y: 100,
    opacity: 0,
    ease: 'power1'
});

gsap.from(".info",{
    duration: 2,
    y: 50,
    opacity: 0.5,
    ease: 'power1'
});

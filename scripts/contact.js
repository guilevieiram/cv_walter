function importElement(elementId, elementSourceHTML){
    $('#' + elementId).load(elementSourceHTML);
}
importElement('footer', 'components/footer.html');
importElement('header', 'components/nav-bar.html');

gsap.from("header", {
    duration: 1.5, 
    opacity: 0,
    y: -50,
    ease: 'power4'
});

gsap.from(".contact-title",{
    duration: 1.5,
    y: -50,
    opacity: 0.5,
    ease: 'power1'
});

gsap.from(".contact-info",{
    duration: 1.5,
    y: 200,
    opacity: 0,
    ease: 'power1'
});
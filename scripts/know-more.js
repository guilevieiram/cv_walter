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

gsap.from(".know-more-post",{
    duration: 1.5,
    y: 50,
    opacity: 0.5,
    ease: 'power1'
});
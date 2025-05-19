window.addEventListener('load', () => {
    AOS.init({
        duration: 700
    });

    const code = document.querySelector('.code');
    const input = document.querySelector('.input');
    const ca = code.value;

    code.addEventListener('click', () =>{
        var button = code;
        button.select();
        document.execCommand("copy");
        input.classList.add('copied');
        code.classList.add('copied');
        code.value = 'Copied!';
        setTimeout(() => {
            input.classList.remove('copied');
            code.classList.remove('copied');
            code.value = ca;
        }, 2000)
    })

    const burger = document.querySelector('.burger');
    const mobileMenu = document.querySelector('.mobile-menu');

    burger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        document.addEventListener('click', closeElement);
    });
    
    function closeElement(event) {
        if (!mobileMenu.contains(event.target) && !burger.contains(event.target)) {
            mobileMenu.classList.remove('active');
            document.removeEventListener('click', closeElement);
        }
    }

    document.querySelectorAll('.mobile-menu li').forEach(el => {
        el.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
        })
    })
})
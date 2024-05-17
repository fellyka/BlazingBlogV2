//jQuery( document ).ready(function() {

//    $(window).scroll(function(){
//    $('.topnav').toggleClass('scrollednav py-0', $(this).scrollTop() > 50);
//    });

//});

document.addEventListener("DOMContentLoaded", _ => {
    const topNav = document.getElementsByClassName("topnav")[0];
    if (topNav) {
        window.scroll = () => {
            if (window.scorllY > 50) {
                //add these classes scroll py-0
                topNav.classList.add('scrollednav', 'py-0')
            }

            else {
                //remove these classes scroll py-0
                topNav.classList.remove('scrollednav', 'py-0')
            }
        };
    }
});

function toggleMenu(e) {
    e.target.classlist.toggle('collapsed');
    const navbarWrapper = document.getElementById('top-navbar-menu-wrapper').classList.toggle('show');
}

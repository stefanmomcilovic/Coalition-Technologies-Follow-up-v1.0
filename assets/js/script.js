document.addEventListener("DOMContentLoaded", function(){
    // Check what nav-link is hovered or clicked and add class ct-navlink-active
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((item, index) => {
        item.addEventListener('mouseover', function(){
            navLinks.forEach((item, index) => {
                item.classList.remove('ct-navlink-active');
            });
            item.classList.add('ct-navlink-active');
         });
        item.addEventListener('click', function(){
            navLinks.forEach((item, index) => {
                item.classList.remove('ct-navlink-active');
            });
            item.classList.add('ct-navlink-active');
        });
    });

    document.querySelectorAll('.ct-submenu').forEach((item, index) => {
        // check if item next sibling has class ct-dropdown-submenu
        if(item.nextSibling != null && item.nextElementSibling.classList.contains('ct-dropdown-submenu')){
            item.addEventListener('mouseover', function(){
                item.classList.add('ct-submenu-active');
                item.nextElementSibling.classList.add('ct-dropdown-submenu-active');
            });
            item.addEventListener('mouseout', function(){
                item.classList.remove('ct-submenu-active');
                item.nextElementSibling.classList.remove('ct-dropdown-submenu-active');
            });
            item.addEventListener("click", function(){
                // Check if is mobile then call toggle 2 time
                item.classList.toggle('ct-submenu-active');
                item.nextElementSibling.classList.toggle('ct-dropdown-submenu-active');
            });

            item.nextElementSibling.addEventListener('mouseover', function(){
                item.nextElementSibling.classList.add('ct-dropdown-submenu-active');
            });
            item.nextElementSibling.addEventListener('mouseout', function(){
                item.nextElementSibling.classList.remove('ct-dropdown-submenu-active');
            });
           
        }
    });
      
});

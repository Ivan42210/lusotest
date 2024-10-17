/*toggle function*/

const toggleBtn = document.getElementById('toggle-btn')
const menu = document.getElementById('menu')
const menuClass = menu.classList

toggleBtn.addEventListener('click', toggleAction)

function toggleAction(){

    if(menuClass.contains('closed')){
        menuClass.remove('closed');
        menuClass.add('open');
    }else{
        menuClass.remove('open');
        menuClass.add('closed')
    }
}

console.log(toggleBtn)

/*drawer function onClick*/

const menuLinks = menu.querySelectorAll('a');

menuLinks.forEach((link) =>{
    link.addEventListener('click', function(event) {
        event.preventDefault();
        menuClass.remove('open');
        menuClass.add('closed')
    })
})




console.log(menuLinks)
/*toggle function*/

const toggleBtn = document.getElementById('toggle-btn')
const menu = document.getElementById('menu')

toggleBtn.addEventListener('click', toggleAction)

function toggleAction(){
   
    const menuClass = menu.classList

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

const menuLinks = menu.childNodes;

console.log(menuLinks)
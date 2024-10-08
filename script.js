//Tabbed menu

function openMenu(event, menuName) {
  var i, menuArray, tablinks;
  
  menuArray = document.getElementsByClassName('menu');
  for (i = 0; i < menuArray.length; i++) {
    menuArray[i].style.display = 'none';
  }
  tablinks = document.getElementsByClassName('tablink');
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active-tab');
  }
    document.getElementById(menuName).style.display = ('block');
    event.currentTarget.classList.add('active-tab')
}
document.getElementById('mainLink').click();

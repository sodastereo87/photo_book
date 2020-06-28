// sidebar
function openNav() {
  document.getElementById('mySidenav').style.width = '250px';
  document.getElementById('main').style.marginLeft = '250px';
  document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
}

function closeNav() {
  document.getElementById('mySidenav').style.width = '0';
  document.getElementById('main').style.marginLeft = '0';
  document.body.style.backgroundColor = 'white';
}

// // Modal images
// // Get the modal
var modal = document.getElementById('myModal');
var i;

var img = document.getElementsByClassName('myImg');
var modalImg = document.getElementById('img01');

for (i = 0; i < img.length; i++) {
  img[i].onclick = function () {
    modal.style.display = 'block';
    modalImg.src = this.src;
  };
}

var span = document.getElementsByClassName('close')[0];

span.onclick = function () {
  modal.style.display = 'none';
};

//todo: SideBar Animation
const div_tag = document.querySelectorAll('.nav-main ul li a .nav-op')
const current = location.href;

for(let i = 0; i < div_tag.length; i++){
  div_tag[i].addEventListener('click',function(){
    var active = document.getElementsByClassName('active-sidebar');
    active[0].className = active[0].className.replace(' active-sidebar','');
    console.log(this.className)
    //* Adding active-sidebar class
    this.className += ' active-sidebar';
  });
}
//todo: Keep in active in sidebar by changing url hash
$(function() {
  $('.nav-op[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active-sidebar');
});

$(function() {
  $('.dropdown-container ul li .child-dropdown[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active-child-dropdown');
});
//todo: Removing overlay message effect
try {
  const close = document.getElementById('close-1');
  close.addEventListener('click', () => {
      document.getElementById("overlay").remove();
  })
} catch (e) {
  
}
function popup_add_producto(){
  document.querySelector('.mantener-productos .popup-add-producto').style.display = 'flex';
}
function popup_close_producto(){
  document.querySelector('.mantener-productos .popup-add-producto').style.display = 'none';
}
//todo: Making sure "button_add_mantener_producto" isn't NULL for not getting console error and same thing with "button_close_add_mantener_producto" --- both "const" should be included in same file that they're being used
const button_add_mantener_producto = document.getElementById('add-mantener-producto-btn')
if (button_add_mantener_producto){
  button_add_mantener_producto.addEventListener('click',popup_add_producto,false);
}
const button_close_add_mantener_producto = document.getElementById('close-popup-mantener-producto')
if (button_close_add_mantener_producto){
  button_close_add_mantener_producto.addEventListener('click',popup_close_producto,false);
}
function openSidebar() {
  document.querySelector(".sidebar").style.display = "flex";
  document.querySelector(".sidebar").classList.add('animate__fadeInLeft')
  document.getElementById('btn-opensidebar').style.display = 'none';
}
function closeSidebar() {
  document.querySelector(".sidebar").style.display = "none";
  document.getElementById('btn-opensidebar').style.display = 'flex';
  document.querySelector(".sidebar").classList.add('animate__bounceInLeft')
}
document.getElementById('btn-opensidebar').addEventListener('click', openSidebar);
document.getElementById('btn-closesidebar').addEventListener('click', closeSidebar);

$(document).ready(function() {
  $('a[data-toggle="tab"]').on( 'shown.bs.tab', function (e) {
      $.fn.dataTable.tables( {visible: true, api: true} ).columns.adjust();
  } );
  $('table.table').DataTable( {
      "language":{
        "url":"/json/dataTable-es.json"
      },
      scrollY:        200,
      scrollCollapse: true,
      paging:         true,
      responsive: {
        breakpoints: [
          {name: 'bigdesktop', width: Infinity},
          {name: 'meddesktop', width: 1480},
          {name: 'smalldesktop', width: 1280},
          {name: 'medium', width: 1188},
          {name: 'tabletl', width: 1024},
          {name: 'btwtabllandp', width: 848},
          {name: 'tabletp', width: 768},
          {name: 'mobilel', width: 480},
          {name: 'mobilep', width: 320}
        ]},
      dom: 'Bfrtilp',
      buttons:[
        {
          extend: 'excelHtml5',
          text:'<i class="fas fa-file-excel"></i>',
          titleAttr: 'Exportar a Excel',
          className: 'btn btn-success'
        },
        {
          extend: 'pdfHtml5',
          text:'<i class="fas fa-file-pdf"></i>',
          titleAttr: 'Exportar a PDF',
          className: 'btn btn-danger'
        },
        {
          extend: 'print',
          text:'<i class="fas fa-print"></i>',
          titleAttr: 'Imprimir',
          className: 'btn btn-info'
        },
      ]
  } );
} );

$(document).ready( function () {
  $('#myTable').DataTable({
    "language":{
      "url":"/json/dataTable-es.json"
    },
    "scrollY": "200px",
    "scrollCollapse": true,
    "paging": true,
    responsive: {
      breakpoints: [
        {name: 'bigdesktop', width: Infinity},
        {name: 'meddesktop', width: 1480},
        {name: 'smalldesktop', width: 1280},
        {name: 'medium', width: 1188},
        {name: 'tabletl', width: 1024},
        {name: 'btwtabllandp', width: 848},
        {name: 'tabletp', width: 768},
        {name: 'mobilel', width: 480},
        {name: 'mobilep', width: 320}
      ]
    }
  });
});
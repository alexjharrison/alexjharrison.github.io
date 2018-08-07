//document ready function
$(()=>{
    M.AutoInit();
    var elem = document.querySelector('.scrollspy');
    var instance = M.ScrollSpy.getInstance(elem);
})

function getActiveElement(id) {
    return 'a[href="#' + id + '"]';
  }
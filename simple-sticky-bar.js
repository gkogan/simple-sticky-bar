function stickyBar(){

  barCheck();
  barEvents();

  // Check whether to show bar
  function barCheck() {

    // Check session storage for bar removal, or else show bar
    var hidebar = localStorage.getItem('bar-hide') || false;
    if (hidebar) {
      barHide();
    }
  }

  function barEvents() {
    // Dismiss bar
    document.querySelector('.dismiss').addEventListener('click', function(e) {
      e.preventDefault();
      // Save preference to localstorage
      barPrevent();
      // Hide the bar immediately
      barHide();
    });
  }
  function barHide() {
    // Hide bar
    document.querySelector('#bar').remove();
  }
  function barPrevent() {
    // Prevent the bar from being shown from this point forward
    localStorage.setItem('bar-hide', true);
  }
};
function toggleDetails(Workicon, ironClass){
    $(Workicon).toggle();
    $(ironClass).toggle();
}
$(document).ready(function()) {
    $('.Workicon').click(function(){
        toggleDetails("#WorkDetails"."Workicon")
    })
    $('.Workicon').click(function(){
        toggleDetails("#WorkDetails"."Workicon")
})
}
document.addEventListener('DOMContentLoaded', function() {
    // code to run when the page loads
    console.log('Page loaded!');
  });
  const submitButton = document.querySelector('button[type="submit"]');

  submitButton.addEventListener('click', function(event) {
    event.preventDefault();
    // code to run when the button is clicked
    console.log('Button clicked!');
  });  
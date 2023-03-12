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
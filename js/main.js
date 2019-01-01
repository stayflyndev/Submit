// Animate Smooth Scrool
$('#view-work').on('click', function() {
    const images = $('#images').position().top;

    $('html, body').animate({
       scrollTop: images 
    }, 900
   );
});

$('#footer').on('click', function () {
    const contact = $('#contact').position().bottom;
    $('html, body').animate({
       scrollBottom: contact
    }, 90
    );
});

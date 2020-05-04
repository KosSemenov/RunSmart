$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav: true,
    items: 1,
    singleItem: true,
    dots: false,
    }
  );
});





      // modal


      $('[data-modal=consultation]').on('click', function() {
        $('.overlay, #consultation').fadeIn();
      });

      $('.modal__close').on('click', function() {
        $('.overlay, #consultation, #thanks, #order').fadeOut();
      });

      $('.button_mini').on('click', function() {
        $('.overlay, #order').fadeIn();
      });

      $('.button_mini').each(function(i) {
        $(this).on('click', function() {
          $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn();
        });
      });

      $('#consultation form').validate({
        rules: {
          name: 'required',
          phone: 'required',
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: "Введите своё имя",
          phone: 'Введите телефон',
          email: {
            required: "Введите почтовый адрес",
            email: "Почта введена не верно"
          }
        }
      });
      $('#order form').validate();
      

      $('form').submit(function(e) {
        e.preventDefault();
        $.ajax({
          type: "POST",
          url: "mailer/smart.php",
          data: $(this).serialize()
        }).done(function() {
          $(this).find("input").val("");
          $('#consultation, #order').fadeOut();
          $('overlay, #thanks').fadeIn('slow');

          $('form').trigger('reset');
        });
        return false;
      });
  



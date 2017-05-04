$(document).ready(function () {

  var player = 1;

  $('.square').on('click', function(event) {


    var squareselected = $(this);

    if (squareselected.hasClass('ex') || squareselected.hasClass('oh')) {
      alert('This square has already been selected. Please select another');
    } else {
                if(player === 1) {
                    squareselected.addClass('ex');
                      if(checkIfPlayerWon('ex')) {
                          alert('Congrats! Player' + player + 'has won!');
                          } else {
                              player = 2;
                            }
                } else {
                    squareselected.addClass('oh');
                      if(checkIfPlayerWon('oh')) {
                          alert('Congrates Player' + player + 'has won!');
                            } else {
                                player = 1;
                            }
                        }
          }
  });

  function checkIfPlayerWon(symbol) {
    if($('.sql1').hasClass(symbol) && $('.sql2').hasClass(symbol) && $('.sql3').hasClass(symbol)) {
      return true;
    } else if ($('.sql4').hasClass(symbol) && $('.sql5').hasClass(symbol) && $('.sql6').hasClass(symbol)) {
      return true;
    } else if ($('.sql7').hasClass(symbol) && $('.sql8').hasClass(symbol) && $('.sql9').hasClass(symbol)) {
      return true;
    } else if ($('.sql1').hasClass(symbol) && $('.sql4').hasClass(symbol) && $('.sql7').hasClass(symbol)) {
      return true;
    }else if ($('.sql2').hasClass(symbol) && $('.sql5').hasClass(symbol) && $('.sql8').hasClass(symbol)) {
      return true;
    } else if ($('.sql1').hasClass(symbol) && $('.sql4').hasClass(symbol) && $('.sql7').hasClass(symbol)) {
      return true;
    }else if ($('.sql3').hasClass(symbol) && $('.sql6').hasClass(symbol) && $('.sql9').hasClass(symbol)) {
      return true;
    } else if ($('.sql1').hasClass(symbol) && $('.sql5').hasClass(symbol) && $('.sql9').hasClass(symbol)) {
      return true;
    }else if ($('.sql3').hasClass(symbol) && $('.sql5').hasClass(symbol) && $('.sql7').hasClass(symbol)) {
    return true;
    } else {
      return false;
    }

  }

});

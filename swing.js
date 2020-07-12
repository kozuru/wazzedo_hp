$(function() {
    $(document).on('input', '#name', function(e) {
        $('#output1').text($('#name').val());
    });
});
$("#setFontSize").on("input",function () {
          $('#output1').css("font-size", $(this).val() + "px");
  });
$("#setFontWeight").on("input",function () {
          $('#output1').css("font-weight", $(this).val() + "");
  });

$("#setLetterSpacing").on("input",function () {
          $('#output1').css("letter-spacing", $(this).val() + "px");
  });

$(function() {
    $(document).on('input', '#name', function(e) {
        $('#output2').text($('#name').val());
    });
});
$("#setFontSize").on("input",function () {
          $('#output2').css("font-size", $(this).val() + "px");
  });
$("#setFontWeight").on("input",function () {
          $('#output2').css("font-weight", $(this).val() + "");
  });

$("#setLetterSpacing").on("input",function () {
          $('#output2').css("letter-spacing", $(this).val() + "px");
  });


/*colorpicker*/
$('#picker-color').colpick({
	layout:'hex',
	submit:1,
  color:'#f6f6f6',
  onSubmit:function(hsb,hex,rgb,el) {
		$(el).colpickHide();
	},
 onChange:function(hsb,hex,rgb,el,bySetColor) {
   $("#output2").css("color",'#'+hex);

    $(el).css('border-right-color','#'+hex);
		if(!bySetColor) $(el).val('#' +hex);
	}
}).keyup(function(){
	$(this).colpickSetColor(this.value);
});
/*languag translate css*/
function translateFunc() {
  var inputval = document.getElementById('name').value;
  var language = document.getElementById('selectlanguage').value;

            console.log(inputval);
            console.log(language);
 $(document).ready(function() {
                //debugger;
 $.getJSON('https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20170415T074852Z.f30908e49daf053e.1533851723fbfa2f832c94c5bf992441d9f76604&lang=' + language + '&text=' + inputval, function(json) {
   var allResponse = (JSON.stringify(json));
   console.log(allResponse);
   var JSONObject = JSON.parse(allResponse);
   var translatedText = JSONObject["text"];
   document.querySelector('#output2').innerHTML = ' ' + translatedText;
   document.querySelector('#output1').innerHTML = ' ' + translatedText;
   console.log(translatedText);
    });
        });
     }

/* jQuery Ellipsi Text
   Version 1.1
   Author: github.com/pietrofxq
*/

(function ($){

    $.fn.ellipsiText= function(options) {

    var settings = $.extend({
        length : 34,
        ellipsi : "...",
        dontCut: false
        }, options );

    return this.each(function() {
        var elem = $(this),
            txt = elem.text()
        if (settings.dontCut){
            if (txt.length > settings.length) {
                var ellipsed = txt.substr(0,settings.length - settings.ellipsi.length),
                    blankSpace = ellipsed.lastIndexOf(' '),
                    stringFormatted = ellipsed.substr(0,blankSpace),
                    slice = stringFormatted.slice(-1)

                 if (slice == "," || slice == "."){
                   var stringSemPonto = ellipsed.substr(0,blankSpace -1);
                   elem.text(stringSemPonto + settings.ellipsi)
                }   else {
                    elem.text(stringFormatted + settings.ellipsi)
                }
            }
        }   else {
                if (txt.length > settings.length) {
                     elem.text(txt.substr(0,settings.length - settings.ellipsi.length) + settings.ellipsi );
                }
            }
        });
    };
}(jQuery));
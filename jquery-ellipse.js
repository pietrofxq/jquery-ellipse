/* jQuery Ellipsi Text
   Version 1.0
   Author: github.com/pietrofxq
*/

(function ($){

	$.fn.ellipsiText= function(options) {

    var settings = $.extend({
        length : 30,
        ellipsi : "..."
        }, options );

    return this.each(function() {
        var elem = $(this);
        var txt = elem.text();
        if (txt.length>settings.length) {
             elem.text(txt.substr(0,settings.length - settings.ellipsi.length) + settings.ellipsi );
        }
    });

};


}(jQuery));


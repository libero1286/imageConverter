
(function( window, document ){

  var createCanvas = function( width, height ) {
  
    var c = document.createElement("canvas");
    c.width = width;
    c.height = height;
    return c;
  };
  
  var resizeAndOptimize = function( img, width, height, callback ) {
  
    var loadImage = document.createElement("img");
    var overlay = document.createElement( "div" );
    var re_width, re_height;
    overlay.style.cssText = "overflow:hidden;width:0px;height:0px;";
  
    loadImage.onload = function() {
    
      size = [loadImage.width, loadImage.height]
     
      rateW = size[0] / width
      rateH = size[1] / height
     
      if( rateW < rateH )
          rate = rateW
      else
          rate = rateH
     
      if( rate ) {
          re_width = parseInt( size[0] / rate )
          re_height = parseInt( size[1] / rate )
      } else {
          re_width = size[0]
          re_height = size[1]
      }
  
      var canvas = createCanvas( re_width, re_height );
      canvas.getContext( "2d" ).drawImage( loadImage, 0, 0, re_width, re_height );
     
      diff_w = ( re_width - width )
      diff_h = ( re_height - height )
     
      if ( diff_w )
          start_x = diff_w / 2
      else
          start_x = 0
     
      if ( diff_h )
          start_y = diff_h / 2
      else
          start_y = 0
     
      var output = createCanvas( width, height );
      //output.getContext("2d").drawImage( canvas, 0, 0, width, height, start_x, start_y , width , height );
      output.getContext("2d").drawImage( canvas, start_x, start_y , width , height, 0, 0, width, height );
      document.body.removeChild( overlay );
      callback(output.toDataURL());
    }
  
    loadImage.src = img.src;
    overlay.appendChild( loadImage );
    document.body.appendChild( overlay );
  
  };

  window.imageConverter = {
    resizeAndOptimize:resizeAndOptimize
  };

})( window, document );

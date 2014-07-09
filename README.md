#Image Converter

![original image](/demo/head.jpeg)

80 x 80 -> 100 x 80

![resize image](/demo/out_head.jpeg)

##Introduction

Let you convert any image size.

see [python version](https://github.com/SparrowJang/image_converter).

#Install

``` bash
bower install imageConverter
```

#Usage

``` js
var im = new Image();
im.src = "pig_head.png";
imageConverter.resizeAndOptimize( im, 200 ,150, function( data ){
  var outIm = new Image();
  outIm.src = data;
  document.body.appendChild( outIm );
});
```

#Run

Clone this project.
``` bash
git clone https://github.com/SparrowJang/imageConverter
cd imageConverter
```

Install gulp modules.
``` bash
npm install
```

Run a server.
``` bash
gulp serve
```


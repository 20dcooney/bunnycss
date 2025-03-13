# BunnyCSS
The BunnyCSS package provides bunny icons to use in your HTML, along with pastel color presets!

Once the package is downloaded, please include the following line either:
* in the `<head>` section of your index.html file
* below the `<body>` of your index.html file

```
<script src="./index.js"></script>
```

## Basic Usage
BunnyCSS icons will be loaded in when your HTML DOM is loaded. The icons can be selected and modified with pre-built classes.

BunnyCSS icons can be typed into `<i>` tags. The bare minimum for loading a tag is to include the name of the icon you wish to include. For example:
```
<i class="bunny-one"></i>
```

## Color
By default, BunnyCSS icons will inherit the color of the parent element.

You can use the pre-built color classes to modify the color of your icons.
EX:
```
<i class="bunny-one lightpink"></i>
```

If you would like to add your own specific color to your icons, you can include the `custom-color-` tag, followed by the HEX color code you wish to use.
EX:
```
<i class="bunny-one custom-color-#736ecc"></i>
```

## Sizing
BunnyCSS icon files themselves are sized at 1000px by 1000px to provide a high resolution for any size you may need. 

To size your icons, you can use the prebuilt `small`, `medium`, and `large` classes.
```
<i class="bunny-one medium"></i>
```

If you wish to use custom sizing, you can use the `width-` and `height-` classes, followed by the number value and unit of measurement you wish to use:
```
<i class="bunny-one width-100px height-100px"></i>
```
Please note that the icons themselves are bound to their shape and will not be stretched. If the width and height differ from each other, the smaller value will determine the icon appearance. You can have the width and height differ for spacing purposes.

## Combining Classes

All of the previously mentioned classes can be used alongside each other!
```
<i class="bunny-one custom-color-#736ecc width-100px height-100px"></i>
```

Should two classes that modify the same value be used in the same icon element, the class checked for last in the javascript will determine the appearance of the icon. For this reason, custom colors and sizings will always take priority.

EX: `<i class="bunny-one custom-color-#736ecc lightpink">` will appear with the `custom-color-#736ecc` color preset.




More instruction will be added as this project is developed. Current instructions are also subject to be modified.
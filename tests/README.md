## Syntax:
```html
<nav-menu items="p" event-listeners="" toggle-button="" enableLinks="" links=""></nav-menu>
```
|properties|value|Use
|-----|----|----|
|items|`HTML String` or Plain Text(seperated By Comma ",")| Used to create Menu Items Every String Seperated by comma specifies a single menu item.
|event-listener| A Javascript Function(seperated By Comma ",")| Specifies the function to run when a menu item is clicked.|
|toggle-button| id of a `HTML Element` | Specifies the Button that is Used to Toggle the Menu.|
|enableLinks| a `boolean`| Specifies whether to wrap menu items in a link.|
|links| URLs(seperated By Comma ",")| Specifies the destination URL to go when a memu item is pressed if the value of enableLinks is `true`

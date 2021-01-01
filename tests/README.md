## Syntax:
```html
<button id="myButton">Toggle Menu</button>

<nav-menu items="profile,settings,about" event-listeners="alert('profile'),alert('settings'),alert('about')" toggle-button="myButton" enableLinks="true" links="#profile,/settings,https://example.com/about/"></nav-menu>
```
|properties|value|Use
|-----|----|----|
|items|`HTML String` or Plain Text(seperated By Comma ",")| Used to create Menu Items Every String Seperated by comma specifies a single menu item.
|event-listener|Javascript Functions(seperated By Comma ",")| Specifies the function to run when a menu item is clicked.|
|toggle-button| id of a `HTML Element` | Specifies the Button that is Used to Toggle the Menu.|
|enableLinks| a `boolean`| Specifies whether to wrap menu items in a link.|
|links| URLs(seperated By Comma ",")| Specifies the destination URL to go when a memu item is pressed if the value of enableLinks is `true`

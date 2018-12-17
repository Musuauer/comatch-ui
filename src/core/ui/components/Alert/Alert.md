
## Alert

From [`Alert.js`](Alert.js)

An Alert component with different stylistic variations.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**children** | `Union<Array[]<ReactNode> \| ReactNode>` | `null` | :x: | 
**className** | `String` | `null` | :x: | Additional class names
**display** | `Enum('box','inline','notification')` | `'box'` | :x: | `box` will have `display: block` and `background-color`, `inline` is only text and `notification` is like `box` with `display: inline-block`
**displayIcon** | `Boolean` | `true` | :x: | Whether to render the icon that denotes the Alert's type
**id** | `String` | `null` | :x: | HTML id attribute
**message** | `Union<ReactNode \| String>` | `''` | :x: | Text content of the Alert
**type** | `Enum('info','danger','success','warning')` | `'info'` | :x: | Alternative stylings for the Alert





## Panel

From [`Panel.js`](Panel.js)

The `Panel` is a way to organize and present content in the different pages.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**children** | `Union<Array[]<ReactNode> \| ReactNode>` | `null` | :x: | 
**className** | `String` | `null` | :x: | Additional class names
**collapsible** | `Boolean` | `false` | :x: | If true, the `Panel` can expand and collapse its contents. Starts out as collapsed in the first render.
**controls** | `Union<Array[]<ReactNode> \| ReactNode>` | `null` | :x: | Some buttons, links or other HTML content to be placed on the right part of the header next to the title.
**disabled** | `Boolean` | `false` | :x: | 
**expanded** | `Boolean` | `false` | :x: | If true, starts out as expanded in the first render
**id** | `String` | `null` | :x: | HTML id attribute
**onClick** | `Function` | `noop` | :x: | 
**secondary** | `Boolean` | `false` | :x: | Alternative styling
**title** | `Union<Array[]<ReactNode> \| ReactNode \| String>` | `''` | :x: | Heading in the header of the `Panel`
**titleColor** | `Enum('black','gray','blue','green')` | `'black'` | :x: | 




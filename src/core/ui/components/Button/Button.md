
## Button

From [`Button.js`](Button.js)

A `Button` component with different stylistic variations. By default the styling is `full`,
but `ghost` is an alternative version with reversed colors.

If `href` is set an `<a>` is used instead of `<button>`. If the `target` prop is set to `_blank`
in combination with `href`, then it will also add the prop `rel="noopener noreferrer"` for
additional security.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` | `''` | :x: | Additional class names
**disabled** | `Boolean` | `false` | :x: | 
**ghost** | `Boolean` | `false` | :x: | Alternative styling with white background and primary colored text
**href** | `String` | `''` | :x: | If true, uses `<a>` instead of `<button>`
**icon** | `ReactNode` | `null` | :x: | SVG icon
**iconAfterText** | `Boolean` | `false` | :x: | 
**id** | `String` | `null` | :x: | HTML id attribute
**onClick** | `Function` | `noop` | :x: | 
**target** | `String` | `null` | :x: | To be used with `href`, could set for example `target="_blank"`
**text** | `String` | `''` | :x: | Text content of `Button`
**type** | `Enum('button','submit','reset')` | `'button'` | :x: | 





## MultiSelectInput

From [`MultiSelectInput.js`](MultiSelectInput.js)

An input similar to our `Select` input, allowing the user to select multiple options.

This component is our customized wrapper around the 'react-select' component.
@see https://github.com/JedWatson/react-select

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**className** | `String` | `null` | :x: | Additional class names
**disabled** | `Boolean` | `false` | :x: | 
**display** | `Enum('block','inline')` | `'block'` | :x: | 
**id** | `String` | `null` | :x: | HTML id attribute
**inputError** | `String` | `''` | :x: | 
**label** | `Union<Array[]<ReactNode> \| ReactNode \| String>` | `''` | :x: | 
**name** | `String` |  | :white_check_mark: | 
**onBlur** | `Function` | `noop` | :x: | 
**onChange** | `Function` | `noop` | :x: | 
**options** | `Array[]<Shape>` |  | :white_check_mark: | 
**options[].label** | `Union<String \| Number \| Boolean>` |  | :x: | 
**options[].value** | `Union<String \| Number \| Boolean>` |  | :x: | 
**required** | `Boolean` | `false` | :x: | 




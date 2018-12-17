
## TextInput

From [`TextInput.js`](TextInput.js)

TextInput needs to have an implementation as an ES6 class, as opposed
to a functional component, as it is used also internally by the DateInput.

The DateInput uses the npm package react-datepicker, which needs to maintain
an internal ref of the TextInput, thus a class is needed.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**autoComplete** | `Enum('on','off',null)` | `null` | :x: | 
**className** | `String` | `null` | :x: | 
**defaultValue** | `String` | `''` | :x: | 
**disabled** | `Boolean` | `null` | :x: | 
**display** | `Enum('block','inline')` | `'block'` | :x: | 
**icon** | `ReactNode` | `null` | :x: | 
**id** | `String` | `null` | :x: | 
**inputError** | `String` | `''` | :x: | 
**label** | `Union<ReactNode \| String>` | `''` | :x: | 
**maxLength** | `Number` | `null` | :x: | 
**name** | `String` |  | :white_check_mark: | 
**onBlur** | `Function` | `noop` | :x: | 
**onChange** | `Function` |  | :white_check_mark: | 
**onClick** | `Function` | `noop` | :x: | 
**onFocus** | `Function` | `noop` | :x: | 
**placeholder** | `String` | `''` | :x: | 
**required** | `Boolean` | `false` | :x: | 
**type** | `Enum('text','tel','email','number','password')` | `'text'` | :x: | 
**value** | `Union<String \| Number>` | `''` | :x: | 





## TabNavigation

From [`TabNavigation.js`](TabNavigation.js)

A tab navigation that can appear above a `Panel`.

When the tabs are clicked they will usually reveal different parts of the content.

prop | type | default | required | description
---- | :----: | :-------: | :--------: | -----------
**activeTabIndex** | `(custom validator)` | `0` | :x: | Determines which tab should be active
**children** | `Union<Array[]<ReactNode> \| ReactNode>` | `null` | :x: | 
**handleTabClick** | `Function` | `null` | :x: | Updates the state with the active tab before invoking `onTabClick`
**onTabClick** | `Function` | `noop` | :x: | 




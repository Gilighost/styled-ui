# Changelog

### 4.0.0
* Moved group-selector and share-dialog into separate bundles to avoid server-rendering problems

### 3.4.1
* Added ARIA attributes to checkboxes and radios [#67](https://github.com/Faithlife/styled-ui/pull/67)
* Fixed server-render errors with scrollbar changes [#73](https://github.com/Faithlife/styled-ui/pull/73)
* Fixed modals with really long content overflowing the screen size [#72](https://github.com/Faithlife/styled-ui/pull/72)

### 3.4.0
* Improve keyboard accessibility of Button (there is now a focus ring that appears)

### 3.3.0
* New component: styled radio button [#64](https://github.com/Faithlife/styled-ui/pull/64)
* Improved close logic in Modal [#63](https://github.com/Faithlife/styled-ui/pull/63)
* Improved scrollbar presentation in group selector [#62](https://github.com/Faithlife/styled-ui/pull/62)
* Exported some more typeahead components (Menu, MenuItem) [#56](https://github.com/Faithlife/styled-ui/pull/56)
* Updated docs [#60](https://github.com/Faithlife/styled-ui/pull/60)

### 3.2.1
* Fixed missing Token export in typeahead control [#53](https://github.com/Faithlife/styled-ui/pull/53)

### 3.2.0
* New component: ShareDialog [#50](https://github.com/Faithlife/styled-ui/pull/50)
* Cleanup work on GroupSelector component [#52](https://github.com/Faithlife/styled-ui/pull/52)

### 3.1.0
* Added `withoutFooter` prop so modals can be rendered without footers [#49](https://github.com/Faithlife/styled-ui/pull/49)
* Fixed some CSS reset issues in `SimpleModal`, used by GroupSelector [#51](https://github.com/Faithlife/styled-ui/pull/51)

### 3.0.2
* Fixed overflow bug with buttons that are narrower than their content
* Fixed empty file byte count

### 3.0.1
* Fixed a bug with the new variation cache
* Aligned text in stretched buttons with icons
* Added support for justifying content in buttons

### 3.0.0
* Button ref now forwards to the `HTMLButtonElement`
* Renamed `renderIcon` to `icon`.

### 2.2.2
* Fix propType warnings

### 2.2.1
* Add transparent border to `minorTransparent` button variation

### 2.2.0
* New components: FilesSection, DropZone, AnchorButton
* New variations: `primaryTransparent` and `minorTransparent` on Button
* SVGs can now be added to buttons with the `renderIcon` prop
* Fixed some margin issues with the close icon in Modal
* Button default font size is now 16px

Thanks Ian Fisk, Todd White, and Robert Bolender for contributing to this release!

### 2.1.0
* Add support for focus via `innerRef` prop on InferredText and InferredTypeahead

### 2.0.7
* Fixed blurry popover component on Windows. Thanks Robert Bolender (#28)

### 2.0.6
* Fixed box-sizing issues on LoadingSpinner and HelpBox components

### 2.0.5
* Fixed a focus border issue with checkboxes
* Fixed an alignment issue with bootstrap custom inputs. Thanks Jeremy Einfeld (#24)

### 2.0.4
* Fixed some alignment issues with checkboxes

### 2.0.3
* Re-publish of 2.0.2, which had a broken build artifact

### 2.0.2
* Changed medium button font size to 16px

### 2.0.1
* Fixed a flex issue in Helpbox. Thanks Seth Copeland (#22)
* Added some more helpbox color variations. Thanks Ian Fisk (#21)

### 2.0.0
* **Breaking**: After review with the UX team, there are several bootstrap components that are no longer included in this library, because they won't be used in any of our specs.
- Removed: Alert, Navbar*, Nav*, Breadcrumb*, Badge, Card*, Carousel*, Progress, Modal*, Tooltip, Table, ListGroup*, InputGroup*, Media, Tab*, Jumbotron, Pagination*, Collapse

### 1.4.2
* Fixed some spacing issues around elements caused by inherited styles

### 1.4.1
* Add triangle icon to typeahead. (#20)

### 1.4.0
* Added 'Collapse' accordion component

### 1.3.0
* Removed fixed 16px height on check-box (#17)
* Display children inside check-box component (#19)

### 1.2.3
* Fixed another bug when exporting AsyncTypeahead

### 1.2.2
* Fixed exporting async typeahead control
* Fixed a style issue if text-input was not already wrapped in a bootstrap element

### 1.2.1
* Fixed a few oversights in Help Box control

### 1.2.0
* check-box now supports different button types (needed for react-jsonschema-form)
* Added blue Help Box control

### 1.1.0

* Deprecated custom TextInput controls. They will be dropped on the next major release. It's technically a breaking change, but nobody was using these. If you really need them back, import them from '@faithlife/styled-ui/dist/deprecated.js'
* Updated Button margins
* Reduced bundle size of ag-grid style bundle
* Reduce main JS bundle size by excluding unused module exports

### 1.0.0
* **Breaking**: The main component stylesheet is now in `main.css`. Reference this instead of `styles.css`!
* New: Styles and demo components for ag-grid

### 0.0.x

* Themed bootstrap controls, including `Typeahead` and `InferredText`
* Initial alpha release of `Button`, `Checkbox`, and `TextInput` controls

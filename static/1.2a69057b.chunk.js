webpackJsonp([1],{1325:function(e,t,n){var a=n(3),o=n(79),r=n(564).PageRenderer;r.__esModule&&(r=r.default);var i=o({displayName:"WrappedPageRenderer",getInitialState:function(){return{content:n(1361)}},componentWillMount:function(){},render:function(){return a.createElement(r,Object.assign({},this.props,{content:this.state.content}))}});i.__catalog_loader__=!0,e.exports=i},1361:function(e,t){e.exports="A text input control with a clickable inline confidence indicator.\n\n```hint|directive\nThese components require the [Faithlife Bootstrap base stylesheet](/bootstrap/stylesheet) to be loaded globally in your app.\n```\n\n### Inferred typeahead\n\n```\nimport { InferredTypeahead } from '@faithlife/styled-ui/dist/text-input.js';\nimport '@faithlife/styled-ui/dist/text-input.css';\n```\n\n```react\nshowSource: false\nstate: { value: 'Washington', confirmed: false }\n---\n<div>\n\t<FormGroup>\n\t\t<Label>Current selection: {state.value}</Label>\n\t\t<InferredTypeahead\n\t\t\tconfidence={state.confirmed ? null : 0.9}\n\t\t\tonChange={value => { setState({ value, confirmed: true })}}\n\t\t\tonConfirm={value => { setState({ confirmed: true })}}\n\t\t\toptions={['Washington','California','Texas']}\n\t\t\tplaceholder=\"Choose a state...\"\n\t\t\tdefaultInputValue={state.value}\n\t\t/>\n\t</FormGroup>\n</div>\n```\n\n### Inferred text input\n\n```\nimport { InferredText } from '@faithlife/styled-ui/dist/text-input.js';\n```\n\n```react\nshowSource: false\nstate: { value: 'This value was guessed', confirmed: false }\n---\n<div>\n\t<FormGroup>\n\t\t<Label>High Confidence</Label>\n\t\t<InferredText\n\t\t\tconfidence={state.confirmed ? null : 0.9}\n\t\t\tonChange={e => setState({ value: e.target.value, confirmed: true })}\n\t\t\tonConfirm={() => setState({ confirmed: true })}\n\t\t\tvalue={state.value}\n\t\t/>\n\t</FormGroup>\n</div>\n```\n\n```react\nshowSource: false\nstate: { value: 'This value was guessed', confirmed: false }\n---\n<div>\n\t<FormGroup>\n\t\t<Label>Medium Confidence</Label>\n\t\t<InferredText\n\t\t\tconfidence={state.confirmed ? null : 0.7}\n\t\t\tonChange={e => setState({ value: e.target.value, confirmed: true })}\n\t\t\tonConfirm={() => setState({ confirmed: true })}\n\t\t\tvalue={state.value}\n\t\t/>\n\t</FormGroup>\n</div>\n```\n\n```react\nshowSource: false\nstate: { value: 'This value was guessed', confirmed: false }\n---\n<div>\n\t<FormGroup>\n\t\t<Label>Low Confidence</Label>\n\t\t<InferredText\n\t\t\tconfidence={state.confirmed ? null : 0.6}\n\t\t\tonChange={e => setState({ value: e.target.value, confirmed: true })}\n\t\t\tonConfirm={() => setState({ confirmed: true })}\n\t\t\tvalue={state.value}\n\t\t/>\n\t</FormGroup>\n</div>\n```\n\n### Focusable Input\n```react\nshowSource: false\n---\n<InferredTypeaheadFocusDemo />\n```\n\n```react\nshowSource: false\n---\n<InferredTextFocusDemo />\n```\n\n\n## Component PropTypes\n```react\nnoSource: true\n---\n<div>\n\t<DocgenTable component={InferredTypeahead} />\n\t<DocgenTable component={InferredText} />\n</div>\n```\n"}});
//# sourceMappingURL=1.2a69057b.chunk.js.map
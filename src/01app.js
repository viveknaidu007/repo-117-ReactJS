let heading = React.createElement(
    'h1',{
        id :'bg-blue'
    },
    "this is React JS Demo"
)


let para = React.createElement(
    'p',{

    },
    "this is paragraph"
)

let wrapper = react.createElement(
    'div',{

    },
    [heading,para]
)

let ele = Document.getElementById('root');

let root = ReactDOM.createRoot(ele);

root.render(heading)
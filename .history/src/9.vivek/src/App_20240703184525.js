import "./Apps.css"

function App() {
  let s1={
    background:"green",
    color:"white",
    marginTop:"100px"
  }

  return (
    <>
    <h1 style={s1}> this is heading </h1>
    <p> this is paragraph</p>
    </>
  )
}

export default App


















// one way

/*
export default function App(){
  return (<h1> this is heading</h1>)
}
*/

// we can do in this below:

/*
function App(){
  return (<h1> this is heading </h1>)
}

export default App */
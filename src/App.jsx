import { useState } from 'react'

import Card from "./components/Card/Card";
import Card2 from "./components/Card2/Card2";



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Card />
    <Card2 />
    </>
  );
}

export default App;

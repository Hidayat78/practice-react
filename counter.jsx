import  react,{useState} from 'react'

function counter() {
  let [count, setCount]=useState(0);

  const incCount=()=>{
    setCount(count+1);
  }
  const inCount=()=>{
    if(count > 0){
      setCount(count-1);
    }
    
  }
  return (
    <div>
      <h1>Hidayat Morning Star</h1>
      <button onClick={incCount}>Inc</button>
      <h1>{Math.max(count,0)}</h1>
      <h1>{Math.min(Math.max(count, 0), 5)}</h1>
      <button onClick={inCount}>Dec</button>
    </div>
  )
}

export default counter

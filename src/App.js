import {useSelector,useDispatch} from 'react-redux';
import {incrementFn,decrementFn,multipleByNumFn} from './actions/counteraction'
function App() {
  const stateCount=useSelector(state=>state.counter);//access state value of store
  const dispatch=useDispatch(); //dispatcher
  console.log('count',stateCount)
  return (
    <div className="App">
      <header className="App-header">
         <b> Learn React</b>
          <p>React Redux without redux-toolkit In functional components</p>
          <button onClick={()=>dispatch(incrementFn())}> Increment </button>
          <button onClick={()=>dispatch(decrementFn())}> Decrement</button>
          <button onClick={()=>dispatch(multipleByNumFn(5))}> Multiply by 5</button>

      </header>
    </div>
  );
}

export default App;

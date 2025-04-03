import { createStore} from 'redux'
import CountrtReducer from './CounterReducer' 

const Store = createStore(CountrtReducer);

export default Store;
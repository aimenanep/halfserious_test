import ListShips from '../components/ListShips'
import { Loader } from '../../components/styled'

export default function Home({_Data,get_ships,_Loading}) {
    
  return (
    <>  
        {_Loading 
          ? <Loader /> 
          : <ListShips _Data={_Data} get_ships={get_ships} />
        }
    </>
  )
}

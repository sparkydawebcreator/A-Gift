import Download from './Download'
import Text from './Text'
import Directions from './Directions'
import WhiteSpace from './Whitespace'
import Blank from './Blank'
import TextWhitespace from './TextWhitespace'
import WhatsNew from './WhatsNew'
import Asterisks from './Asterisks'

const App = () => {
  return (
    <div>
      <WhiteSpace/>
      <TextWhitespace/>
      <Blank/>      
      <Directions/> 
      <Text/>
      <WhatsNew/>
      <Asterisks/>
    </div>
  ) 
}

export default App;


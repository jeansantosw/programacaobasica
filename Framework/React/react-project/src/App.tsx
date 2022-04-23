import { useState } from 'react'
import { AppRoutes } from './Routes'
import { Tweet } from './components/Tweet'

function App() {
  // const [tweets, setTweets] = useState<string[]>([
  //   'Tweets 1',
  //   'Tweets 2',
  //   'Tweets 3',
  // ])

  // function addTweets() {
  //   setTweets([...tweets, 'tweets'])
  // }

  return (
    <AppRoutes />
    // <div>
    //   {tweets.map(tweet => {
    //     return <Tweet text={tweet} />
    //   })}
    //   <button onClick={addTweets}>Add Tweets</button>
    // </div>
  )
}

export default App


import { Suspense } from 'react'
import './App.css'
import Countries from './components/Countries/Countries'

const countriesPromises=fetch('https://openapi.programming-hero.com/api/all')
.then(res=>res.json())
function App() {


  return (
    <>
    <Suspense fallback={<p>NUR VAI LOADING.....</p>}>
     <Countries countriesPromises={countriesPromises}/>
    </Suspense>
    
    </>
  )
}

export default App

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import FormComponent from './components/FormComponent'
// import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <header className='App-header'>
          {/* <ClassComponent title='Custom Title!' subTitle='Custom SubTitle' /> */}
          {/* we're trying to pass to ClassComponent a props object like this:*/}
          {/* { title: string } */}
          {/* <ClassComponent title='Another ClassComponent' /> */}
          <Routes>
            <Route path='/' element={<FunctionalComponent title='Custom Function Title' />} />
            <Route path='/form' element={<FormComponent />} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  )
}

export default App

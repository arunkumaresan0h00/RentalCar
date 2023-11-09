
import './App.css'
import ArticleComponent from './Container/Article'
import FooterComponent from './Container/Footer'
import HeaderComponent from './Container/HeaderComponent/index'
import NavComponent from './Container/Nav'

function App() {

  return (
    <>
      <div className='main-container'>
      <HeaderComponent />
      <NavComponent/>
      <ArticleComponent/> 
      <FooterComponent/>  
           </div>
    </>
  )
}

export default App

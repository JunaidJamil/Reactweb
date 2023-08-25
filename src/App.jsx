
import './App.css';
import SearchAppBar from './components/navbar';
import Head from './components/head';
import SimpleSlider from './components/slide';
import { About } from './components/about';
import RecipeReviewCard from './components/cards';
import Foot from './components/foot';
function App() {
  return (
    <div >
  <SearchAppBar/>
  <Head/>
 <h1 className='headings'> SLIDES </h1> 
<SimpleSlider/>
<About/>
<h1 className='headings'>SERVICES</h1>
<RecipeReviewCard/>
<Foot/>
    </div>
  );
}

export default App;

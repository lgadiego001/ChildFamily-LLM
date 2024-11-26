import { Route, Routes } from 'react-router-dom';
import './App.css'

import SlideTitle from './components/SlideTitle';
import SlideLargeLanguageModels from './components/SlideLargeLanguageModels';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<SlideTitle />} />
                <Route path='/large-language-models' element={<SlideLargeLanguageModels />} />
            </Routes>
        </>
    )
}

export default App

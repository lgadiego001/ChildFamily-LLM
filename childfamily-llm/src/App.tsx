import { Route, Routes } from 'react-router-dom';
import './App.css'

import SlideTitle from './components/SlideTitle';
import SlideLargeLanguageModels from './components/SlideLargeLanguageModels';
import SlideChildFamily from './components/SlideChildFamily';
import SlideClassifications from './components/SlideClassifications';
import SlideSetup from './components/SlideSetup';
import SlidePrompts from './components/SlidePrompts';
import SlideEvaluations from './components/SlideEvaluations';
import SlideConclusions from './components/SlideConclusions';

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={<SlideTitle />} />
                <Route path='/large-language-models' element={<SlideLargeLanguageModels />} />
                <Route path='/child-parent-interactions' element={<SlideChildFamily />} />
                <Route path='/classifications' element={<SlideClassifications />} />
                <Route path='/setup' element={<SlideSetup />} />
                <Route path='/prompts' element={<SlidePrompts />} />
                <Route path='/evaluations' element={<SlideEvaluations />} />
                <Route path='/conclusions' element={<SlideConclusions />} />
            </Routes>
        </>
    )
}

export default App

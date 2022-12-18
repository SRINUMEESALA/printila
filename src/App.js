import { useState } from 'react';
import './App.css';
import CustomerPrototype from './components/CustomerPrototype';
import PrintilaContext from './context/PrintilaContext';



const App = () => {
    const [selectedDesignsList, setSelectedDesignsList] = useState([])
    console.log("SelectedDesignsIds", selectedDesignsList)
    return (
        <>
            <PrintilaContext.Provider value={{ selectedDesignsList, setSelectedDesignsList }}>
                <CustomerPrototype />
            </PrintilaContext.Provider>

        </>
    )
}



export default App;

import { useState } from 'react';
import './App.css';
import Store from './components/Store';
// import CustomerPrototype from './components/CustomerPrototype';
import PrintilaContext from './context/PrintilaContext';



const App = () => {
    // for customer prototype
    const [selectedDesignsList, setSelectedDesignsList] = useState([])

    // for store
    const [categoriesList, setCategoriesList] = useState([])
    const [namingCounter, setNamingCounter] = useState(1)
    console.log("categories List", categoriesList)
    return (
        <>
            <PrintilaContext.Provider value={{ selectedDesignsList, setSelectedDesignsList, categoriesList, setCategoriesList, namingCounter, setNamingCounter }}>
                {/* <CustomerPrototype /> */}
                <Store />
            </PrintilaContext.Provider>

        </>
    )
}



export default App;

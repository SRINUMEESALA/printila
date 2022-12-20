import React from "react";

const PrintilaContext = React.createContext({
    selectedDesignsList: [],
    setSelectedDesignsList: () => { },
    categoriesList: [],
    setCategoriesList: () => { },
    namingCounter: 0
})
export default PrintilaContext
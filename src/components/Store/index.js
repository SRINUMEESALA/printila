import { v4 as uuidv4 } from "uuid"
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import SellerHeader from "../SellerHeader"
import "./index.css"
import { useState } from "react";
import Footer from "../Footer"
import CategoryItem from "../CategoryItem";
import PrintilaContext from "../../context/PrintilaContext";
import CategroryVariationsList from "../CategoryVariationsList";

const fabricItems = [{ fabric: "Polo t-shirt", id: "POLOTSHIRT" }, { fabric: "Cotton t-shirt", id: "COTTONTSHIRT" }, { fabric: "Matty t-shirt", id: "MATTYTSHIRT" }, { fabric: "Dryfit t-shirt", id: "DRYFITTSHIRT" }]
const neckItems = [{ neckType: "Round neck", id: "ROUNDNECK" }, { neckType: "V-Neck", id: "VNECK" }, { neckType: "Collar", id: "COLLAR" }]
const sleeveItems = [{ sleeveType: "Half Sleeves", id: "HALFSLEEVES" }, { sleeveType: "Full Sleeves", id: "FULLSLEEVES" }]
const printingTypes = [{ printType: "Vinayal", id: "VINAYAL" }, { printType: "Screen", id: "SCREEN" }, { printType: "Sublimation", id: "SUBLIMATION" }]
const Store = () => {

    const [category, setCategory] = useState({})
    const [isCategoryAlreadyExists, setIsCategoryAlreadyExists] = useState(false)
    const [selectedPrintId, setSelectedPrintId] = useState("VINAYAL")
    const [selectedCategoryCardId, setSelectedCategoryCardId] = useState("")
    // console.log(category, isCategoryAlreadyExists, "categoriesList")

    const onClickAddCategory = (categoriesList, setCategoriesList,setNamingCounter,namingCounter) => {
        const isExist = (categoriesList.filter((obj) => obj.fabric === category.fabric && obj.neckType === category.neckType && obj.sleeveType === category.sleeveType)).length > 0
        if (isExist) {
            setIsCategoryAlreadyExists(true)
        } else {
            if (category.fabric === undefined || category.neckType === undefined || category.sleeveType === undefined) {
                setIsCategoryAlreadyExists(true)
                return
            }
            const newId = uuidv4()
            setIsCategoryAlreadyExists(false)
            setCategoriesList(prevList => [...prevList, { ...category, categoryName: `Category ${namingCounter}`, id: newId ,savedVariationsList:[]}])
            setCategory({})
            setNamingCounter(val=>val+=1)
        }

    }

    const renderAddCategorySection = () => (
        <PrintilaContext.Consumer>
            {value => {
                const {categoriesList, setCategoriesList,setNamingCounter,namingCounter} = value
                return (
                    <div className="addCategoryCon p-3">
                        <div className="categoryForm p-3 rounded">
                            <h1 className="h4 mb-3 textColor">Add Category</h1>
                            <div className="form-group d-flex justify-content-between align-items-center">
                                <label htmlFor="fabric " className="m-0 ">Fabric</label>
                                <select className="form-control w-75" id="fabric" onChange={(event) => { setCategory(prevObj => ({ ...prevObj, fabric: event.target.value })) }} value={category.fabric}>
                                    <option value="select">Select</option>
                                    {fabricItems.map(obj => <option key={uuidv4()} value={obj.id}>{obj.fabric}</option>)}
                                </select>
                            </div>
                            <div className="form-group d-flex justify-content-between align-items-center">
                                <label htmlFor="neck " className="m-0 ">Neck</label>
                                <select className="form-control w-75" id="neck" onChange={(event) => { setCategory(prevObj => ({ ...prevObj, neckType: event.target.value })) }} value={category.neckType}>
                                    <option value="select">Select</option>
                                    {neckItems.map(obj => <option key={uuidv4()} value={obj.id}>{obj.neckType}</option>)}
                                </select>
                            </div>
                            <div className="form-group d-flex justify-content-between align-items-center">
                                <label htmlFor="sleeve " className="m-0 ">Sleeve</label>
                                <select className="form-control w-75" id="sleeve" onChange={(event) => { setCategory(prevObj => ({ ...prevObj, sleeveType: event.target.value })) }} value={category.sleeveType}>
                                    <option value="select">Select</option>
                                    {sleeveItems.map(obj => <option key={uuidv4()} value={obj.id}>{obj.sleeveType}</option>)}
                                </select>
                            </div>
                            <div className="mt-2">
                                <p className="mb-1">Available Printing on this fabric</p>
                                <ul className="list-unstyled d-flex justify-content-around">

                                    {printingTypes.map(obj => <li key={uuidv4()}><Chip label={obj.printType} color={obj.id === selectedPrintId ? "secondary" : "info"} variant={obj.id === selectedPrintId ? "filled" : "outlined"} onClick={() => setSelectedPrintId(obj.id)} /></li>)}
                                </ul>
                            </div>
                            <Button variant="contained" color="secondary" sx={{ backgroundColor: "#171f46" }} className="w-100" onClick={(event)=>onClickAddCategory(categoriesList, setCategoriesList,setNamingCounter,namingCounter)}>
                                Create Category
                            </Button>
                            {isCategoryAlreadyExists && <p className="small text-danger">Sorry!Category might already exists or Entered invalid Details</p>}
                        </div>
                        <div className="listedCategoriesCon mt-2 overflow-auto">
                            <ul className="list-unstyled">
                                {categoriesList.map(obj => <CategoryItem key={uuidv4()} eachCategoryItem={obj} selectedCategoryCardId={selectedCategoryCardId} setSelectedCategoryCardId={setSelectedCategoryCardId}/>)}
                            </ul>
                        </div>
                    </div>
                )
            }}
        </PrintilaContext.Consumer>

    )

    const renderEditCategorySection = () => (
        <div className="catergoryEditCon p-3 overflow-auto">
            <CategroryVariationsList selectedCategoryCardId={selectedCategoryCardId}/>
        </div>
    )

    const renderAddCategoryScreen = () => (
            <div className="addCategoryAndManageCon align-self-center d-flex flex-column flex-md-row mt-3 mb-5">
                {renderAddCategorySection()}
                {renderEditCategorySection()}
            </div>
        )
    

    return (
        <div className="storeParentCon d-flex flex-column">
            <SellerHeader />
            {renderAddCategoryScreen()}
            <Footer/>
        </div>
    )
}

export default Store















// import { v4 as uuidv4 } from "uuid"
// import Chip from '@mui/material/Chip';
// import Button from '@mui/material/Button';
// import SellerHeader from "../SellerHeader"
// import "./index.css"
// import { useState } from "react";
// import CategoryItem from "../CategoryItem";
// import VariationItem from "../VariationItem";
// import SavedVariationItem from "../SavedVariationItem";
// import PrintilaContext from "../../context/PrintilaContext";

// const fabricItems = [{ fabric: "Polo t-shirt", id: "POLOTSHIRT" }, { fabric: "Cotton t-shirt", id: "COTTONTSHIRT" }, { fabric: "Matty t-shirt", id: "MATTYTSHIRT" }, { fabric: "Dryfit t-shirt", id: "DRYFITTSHIRT" }]
// const neckItems = [{ neckType: "Round neck", id: "ROUNDNECK" }, { neckType: "V-Neck", id: "VNECK" }, { neckType: "Collar", id: "COLLAR" }]
// const sleeveItems = [{ sleeveType: "Half Sleeves", id: "HALFSLEEVES" }, { sleeveType: "Full Sleeves", id: "FULLSLEEVES" }]
// const printingTypes = [{ printType: "Vinayal", id: "VINAYAL" }, { printType: "Screen", id: "SCREEN" }, { printType: "Sublimation", id: "SUBLIMATION" }]
// const Store = () => {
//     <PrintilaContext.Consumer>
//         {value => {
//             const [categoriesList, setCategoriesList] = value
//             return (
                
//             )
//         }}
//     </PrintilaContext.Consumer>
//     const [categoriesList, setCategoriesList] = useState([])
//     const [category, setCategory] = useState({})
//     const [isCategoryAlreadyExists, setIsCategoryAlreadyExists] = useState(false)
//     const [selectedPrintId, setSelectedPrintId] = useState("VINAYAL")
//     const [selectedCategoryCardId, setSelectedCategoryCardId] = useState("")
//     let categoryCount = 1
//     console.log(category, isCategoryAlreadyExists, categoriesList)

//     const onClickAddCategory = () => {
//         const isExist = (categoriesList.filter((obj) => obj.fabric === category.fabric && obj.neckType === category.neckType && obj.sleeveType === category.sleeveType)).length > 0
//         if (isExist) {
//             setIsCategoryAlreadyExists(true)
//         } else {
//             if (category.fabric === undefined || category.neckType === undefined || category.sleeveType === undefined) {
//                 setIsCategoryAlreadyExists(true)
//                 return
//             }
//             const newId = uuidv4()
//             setIsCategoryAlreadyExists(false)
//             setCategoriesList(prevList => [...prevList, { ...category, categoryName: `Category ${categoryCount}`, id: newId }])
//             setCategory({})
//             categoryCount += 1
//         }

//     }

//     const renderAddCategorySection = () => (
//         <div className="addCategoryCon p-3">
//             <div className="categoryForm p-3 rounded">
//                 <h1 className="h4 mb-3 textColor">Add Category</h1>
//                 <div className="form-group d-flex justify-content-between align-items-center">
//                     <label htmlFor="fabric " className="m-0 ">Fabric</label>
//                     <select className="form-control w-75" id="fabric" onChange={(event) => { setCategory(prevObj => ({ ...prevObj, fabric: event.target.value })) }} value={category.fabric}>
//                         <option value="select">Select</option>
//                         {fabricItems.map(obj => <option key={uuidv4()} value={obj.id}>{obj.fabric}</option>)}
//                     </select>
//                 </div>
//                 <div className="form-group d-flex justify-content-between align-items-center">
//                     <label htmlFor="neck " className="m-0 ">Neck</label>
//                     <select className="form-control w-75" id="neck" onChange={(event) => { setCategory(prevObj => ({ ...prevObj, neckType: event.target.value })) }} value={category.neckType}>
//                         <option value="select">Select</option>
//                         {neckItems.map(obj => <option key={uuidv4()} value={obj.id}>{obj.neckType}</option>)}
//                     </select>
//                 </div>
//                 <div className="form-group d-flex justify-content-between align-items-center">
//                     <label htmlFor="sleeve " className="m-0 ">Sleeve</label>
//                     <select className="form-control w-75" id="sleeve" onChange={(event) => { setCategory(prevObj => ({ ...prevObj, sleeveType: event.target.value })) }} value={category.sleeveType}>
//                         <option value="select">Select</option>
//                         {sleeveItems.map(obj => <option key={uuidv4()} value={obj.id}>{obj.sleeveType}</option>)}
//                     </select>
//                 </div>
//                 <div className="mt-2">
//                     <p className="mb-1">Available Printing on this fabric</p>
//                     <ul className="list-unstyled d-flex justify-content-around">

//                         {printingTypes.map(obj => <li ><Chip label={obj.printType} color={obj.id === selectedPrintId ? "secondary" : "info"} variant={obj.id === selectedPrintId ? "filled" : "outlined"} onClick={() => setSelectedPrintId(obj.id)} /></li>)}
//                     </ul>
//                 </div>
//                 <Button variant="contained" color="secondary" sx={{ backgroundColor: "#171f46" }} className="w-100" onClick={onClickAddCategory}>
//                     Create Category
//                 </Button>
//                 {isCategoryAlreadyExists && <p className="small text-danger">Sorry!Category might already exists or Entered invalid Details</p>}
//             </div>
//             <div className="listedCategoriesCon mt-2 overflow-auto">
//                 <ul className="list-unstyled">
//                     {categoriesList.map(obj => <CategoryItem key={uuidv4()} eachCategoryItem={obj} selectedCategoryCardId={selectedCategoryCardId} setSelectedCategoryCardId={setSelectedCategoryCardId} />)}
//                 </ul>
//             </div>
//         </div>
//     )

//     const renderEditCategorySection = () => (
//         <div className="catergoryEditCon p-3  border border-success overflow-auto">
//             <SavedVariationItem />
//         </div>
//     )

//     const renderAddCategoryScreen = () => {
//         console.log()
//         return (
//             <div className="addCategoryAndManageCon align-self-center d-flex mt-3 mb-5">
//                 {renderAddCategorySection()}
//                 {renderEditCategorySection()}
//             </div>
//         )
//     }

//     return (
//         <div className="storeParentCon d-flex flex-column">
//             <SellerHeader />
//             {renderAddCategoryScreen()}
//         </div>
//     )
// }

// export default Store
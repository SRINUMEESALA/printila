import { FiEdit } from "react-icons/fi";
import Chip from '@mui/material/Chip';
import { v4 as uuidv4 } from "uuid";
import "./index.css"

const printingTypes = [{ printType: "Vinayal", id: "VINAYAL" }, { printType: "Screen", id: "SCREEN" }, { printType: "Sublimation", id: "SUBLIMATION" }]
const CategoryItem = (props) => {
    const { eachCategoryItem, selectedCategoryCardId, setSelectedCategoryCardId } = props
    const { fabric, neckType, sleeveType, categoryName, id } = eachCategoryItem
    return (
        <li className={selectedCategoryCardId === id ? "p-2 card mt-2 pb-3 onSelectCatCard" : "p-2 card mt-2 pb-3"} onClick={() => { setSelectedCategoryCardId(id) }}>
            <div className="d-flex justify-content-between p-1 pl-2 pr-2 rounded">
                <p className="h6">{categoryName}</p>
                <FiEdit className="websiteNativeColor" />
            </div>
            <div className="pricesCon">

                <div className={selectedCategoryCardId === id ? "d-flex justify-content-between styleLine p-1 pl-2 pr-2 rounded mb-1" : "d-flex justify-content-between lineDec p-1 pl-2 pr-2 rounded mb-1"}>
                    <p className={selectedCategoryCardId === id ? "text-white" : "type"}>Fabric</p>
                    <p className="">{fabric}</p>
                </div>
                <div className="d-flex justify-content-between  p-1 pl-2 pr-2 rounded mb-1">
                    <p className={selectedCategoryCardId === id ? "text-white" : "type"}>Neck Type</p>
                    <p className="">{neckType}</p>
                </div>
                <div className={selectedCategoryCardId === id ? "d-flex justify-content-between styleLine p-1 pl-2 pr-2 rounded mb-1" : "d-flex justify-content-between lineDec p-1 pl-2 pr-2 rounded mb-1"}>
                    <p className={selectedCategoryCardId === id ? "text-white" : "type"}>Sleeve Type</p>
                    <p className="">{sleeveType}</p>
                </div>
            </div>
            <div className="mt-3">
                <p className="mb-1 availablePrintsHead">Available Printing</p>
                <ul className="list-unstyled d-flex justify-content-around">
                    {printingTypes.map(obj => <li key={uuidv4()}><Chip label={obj.printType} variant="outlined" className={selectedCategoryCardId === id ? "text-white" : ""} /></li>)}
                </ul>
            </div>
        </li>
    )
}

export default CategoryItem
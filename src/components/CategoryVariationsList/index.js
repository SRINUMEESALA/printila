import { v4 as uuidv4 } from "uuid"
import PrintilaContext from "../../context/PrintilaContext"
import SavedVariationItem from "../SavedVariationItem"
import VariationItem from "../VariationItem"
import "./index.css"


const CategroryVariationsList = (props) => {
    const { selectedCategoryCardId } = props
    return (
        <PrintilaContext.Consumer>
            {value => {
                const { categoriesList, setCategoriesList } = value
                if (categoriesList.length !== 0) {
                    if (selectedCategoryCardId !== "") {
                        const selectedDesing = (categoriesList.filter(obj => obj.id === selectedCategoryCardId))[0]
                        const { savedVariationsList } = selectedDesing
                        return (
                            <ul className="list-unstyled h-100 variationItemsCon">
                                {savedVariationsList.map(obj => <SavedVariationItem key={uuidv4()} savedVariationsItem={obj} />)}
                                <li className=""><VariationItem selectedDesing={selectedDesing} setCategoriesList={setCategoriesList} /></li>
                            </ul>
                        )
                    } else {
                        return <div className="d-flex align-items-center justify-content-center h-100"><h1 className="h4 text-secondary">Please Select the Designs and  Add Variations</h1></div>
                    }

                } else {
                    return (
                        <div className="d-flex flex-column align-items-center justify-content-center h-100">
                            <img src="https://res.cloudinary.com/radhekrishn/image/upload/v1671528659/Group_9438_noVariation_i08dm5.png" alt="noVariation" className="noVariationImg" />
                        </div>
                    )
                }

            }}
        </PrintilaContext.Consumer>
    )
}

export default CategroryVariationsList
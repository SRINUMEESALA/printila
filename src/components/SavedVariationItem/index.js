import { v4 as uuidv4 } from "uuid"
import "./index.css"

const SavedVariationItem = (props) => {
    const { savedVariationsItem } = props
    const { color, Quantities } = savedVariationsItem
    // console.log(color, savedVariationsItem)
    const renderSavedVariationCard = () => (
        <div className="categroryAddVarCon align-self-center">
            <div className="form-group d-flex justify-content-between">
                <div className="d-flex align-self-center m-0 d-flex align-items-center w-50">
                    <label htmlFor="color " className="m-0 mr-3">Color:</label>
                    <p className="m-0">{color}</p>
                </div>
                <div className="d-flex align-items-center">
                    <label htmlFor="photo " className="m-0 mr-3 d-none d-md-block">Image :</label>
                    <div className="uploadCon">
                        <img src="https://res.cloudinary.com/radhekrishn/image/upload/v1671365996/WhatsApp_Image_2022-01-18_at_10.57_9_tshirt_mtnk3g.png" alt="productImage" className="VariationImage w-100" />
                    </div>
                </div>
            </div>
            <p className="">Add sizez & corresponding max stock/t-shirt</p>
            <ul className="list-unstyled">
                {Quantities.map(obj => (
                    <li className="form-group d-flex justify-content-around" key={uuidv4()}>
                        <div className="d-flex align-self-center m-0 d-flex align-items-center w-50">
                            <label htmlFor="color " className="m-0 mr-3">Size:</label>
                            <p className="m-0">{obj.size}</p>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="sm" className="m-0 mr-3">Quantity: </label>
                            <p className="m-0">{obj.count}</p>
                        </div>
                    </li>))}
            </ul>
            <div className="float-right">
                <button type="button" className="btn btn-danger pl-5 pr-5">Delete</button>
            </div>
        </div>
    )
    return (
        < div className="editCon d-flex flex-column" >
            <div className="catergoryItemCon d-flex flex-column text-secondary">
                <h1 className="h4 textColor ml-3 mt-3">
                    Variation
                </h1>
                {renderSavedVariationCard()}
                <div className="">
                    <hr className="bg-secondary w-75" />
                </div>
            </div>
            <div />
        </div >
    )
}

export default SavedVariationItem
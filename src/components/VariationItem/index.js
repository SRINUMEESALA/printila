import { v4 as uuidv4 } from "uuid"
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { AiOutlinePlus } from "react-icons/ai";
import "./index.css"
import { useState } from "react";

const Colors = [{ color: "Red", id: "RED" }, { color: "Green", id: "GREEN" }, { color: "Blue", id: "BLUE" }, { color: "Yellow", id: "YELLOW" },]
const Sizes = [{ size: "S", id: "SMALL" }, { size: "M", id: "MEDIUM" }, { size: "L", id: "Large" }, { size: "XL", id: "XL" }, { size: "XXL", id: "XXL" },]
const VariationItem = (props) => {
    const [alert, setAlert] = useState(false)
    let { selectedDesing, setCategoriesList } = props
    let { categoryName, savedVariationsList, id } = selectedDesing
    const [color, setColor] = useState("")
    let Quantites = { S: 0, M: 0, L: 0, XL: 0, XXL: 0 }

    const addVariation = () => {
        const variantObj = { id: uuidv4(), color, Quantities: [{ size: "S", count: Quantites.S }, { size: "M", count: Quantites.M }, { size: "L", count: Quantites.L }, { size: "XL", count: Quantites.XL }, { size: "XXL", count: Quantites.XXL },] }
        savedVariationsList = [...savedVariationsList, variantObj]
        selectedDesing = { ...selectedDesing, savedVariationsList }
        setCategoriesList(prevList => {
            const updatedList = prevList.filter(obj => obj.id !== id)
            return [...updatedList, selectedDesing]
        })
        setAlert(false)
    }
    return (
        <div className="editCon d-flex flex-column">

            <div className="catergoryItemCon d-flex flex-column text-secondary">
                <h1 className="h4 textColor ml-3 mt-3">
                    {categoryName}: Variation
                </h1>
                <div className="categroryAddVarCon align-self-center">
                    <div className="form-group d-flex justify-content-between">
                        <div className="d-flex align-self-center m-0 d-flex align-items-center w-50">
                            <label htmlFor="color " className="m-0 mr-3">Color:</label>
                            <select className="form-control w-50" id="color" value={color} onChange={(event) => setColor(event.target.value)}>
                                <option value="select">Select</option>
                                {Colors.map(obj => <option key={uuidv4()} value={obj.id}>{obj.color}</option>)}
                            </select>
                        </div>
                        <div className="d-flex align-items-center">
                            <label htmlFor="photo " className="m-0 mr-3 d-none d-md-block">Image :</label>
                            <div className="uploadCon">
                                <IconButton color="primary" aria-label="upload picture" component="label">
                                    <input hidden accept="image/*" type="file" />
                                    <span className="uploadHead text-secondary">Upload</span>
                                    <PhotoCamera />
                                </IconButton>
                            </div>
                        </div>
                    </div>
                    <p className="">Add sizez & corresponding max stock/t-shirt</p>
                    <ul className="list-unstyled">
                        {Sizes.map(obj => (
                            <li className="form-group d-flex justify-content-between" key={uuidv4()}>
                                <div className="d-flex align-self-center m-0 d-flex align-items-center w-50">
                                    <label htmlFor="color " className="m-0 mr-3">Size:</label>
                                    <select className="form-control w-50" id="color" defaultValue={obj.id}>
                                        <option value="select">Select</option>
                                        {Sizes.map(obj => <option key={uuidv4()} value={obj.id}>{obj.size}</option>)}
                                    </select>
                                </div>
                                <div className="d-flex align-items-center">
                                    <label htmlFor="sm" className="m-0 mr-3">Quantity: </label>
                                    <input type="text" className="form-control w-50" id="sm" placeholder="Ex: 500" onChange={(event) => { Quantites = { ...Quantites, [obj.size]: event.target.value } }} />
                                </div>
                            </li>))}
                    </ul>
                    <div className="float-right">
                        <button type="button" className="btn styleButton" onClick={addVariation}>Save</button>
                    </div>
                </div>
                <div className="">
                    <hr className="bg-secondary w-75" />
                </div>
                {alert && <div className="alert alert-danger text-center font-weight-bold" role="alert">
                    Kindly First Fill the Current Active variation and Save.
                </div>}
                <button type="button" className="btn align-self-center mb-5" onClick={() => setAlert(true)}>
                    <div className="addMoreButton rounded-circle d-flex align-items-center justify-content-center">
                        <AiOutlinePlus className="h3 mb-0 text-white" />
                    </div>
                </button>
            </div>
            <div />
            <div />
        </div>
    )
}
export default VariationItem
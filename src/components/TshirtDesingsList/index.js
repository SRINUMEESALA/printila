
import TshirtDesingsItem from "../TshirtDesignItem"
import { v4 as uuidv4 } from "uuid"
import { FiArrowRight } from "react-icons/fi";
import PrintilaContext from "../../context/PrintilaContext"
import "./index.css"

const TshirtDesingsList = (props) => {
    const { desingsList } = props
    return (
        <PrintilaContext.Consumer>
            {value => {
                const { selectedDesignsList } = value
                return (
                    <>
                        <ul className="productCardsCon p-2 d-flex flex-wrap overflow-auto list-unstyled text-secondary">
                            {desingsList.map(obj => <TshirtDesingsItem key={uuidv4()} eachDesign={obj} />)}
                        </ul>
                        <div className="">
                            {selectedDesignsList.length !== 0 && (
                                <div className="desingPopUp text-white  rounded d-flex p-3 shadow">
                                    <div class="form-group d-flex align-self-center m-0">
                                        <label for="exampleInputEmail1" className=" align-self-center m-0 h5 mr-2">{`Quantity :`}</label>
                                        <input type="text" class="form-control w-50" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex:5" />
                                    </div>
                                    <div className="align-self-center">
                                        <button type="button" className="btn text-white websiteNativeBgColor">
                                            <span className="h6"  >Start Designing</span>
                                            <FiArrowRight />
                                        </button>
                                    </div>
                                </div>
                            )}
                        </div>
                    </>
                )
            }}
        </PrintilaContext.Consumer>

    )
}

export default TshirtDesingsList
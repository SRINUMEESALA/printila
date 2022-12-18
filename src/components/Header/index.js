import { Component } from "react"
import "./index.css"

const navItems = [{ item: "Profile", id: 1 }, { item: "Orders", id: 2 }, { item: "Saved Designs", id: 3 }, { item: "Create Enquiry", id: 4 }, { item: "Requested Quote", id: 5 }]

class Header extends Component {
    state = { activeTab: 4 }

    render() {
        const { activeTab } = this.state
        return (
            <>
                <div className="d-none d-md-block">
                    <div className="navParentCon d-flex justify-content-center text-white">
                        <div className="navbarCon d-flex justify-content-between">
                            <h1 className="pt-2 pb-2"><span className="websiteNativeColor">ANGRY</span>BAAZ</h1>
                            <div className="d-flex">
                                <ul className="list-unstyled d-flex m-0">
                                    {navItems.map(eachItem => <li className={activeTab === eachItem.id ? "mr-3 websiteNativeBgColor p-2 d-flex align-items-center" : "mr-3 d-flex align-items-center"} key={eachItem.id}><span>{eachItem.item}</span></li>)}
                                </ul>
                                <button className="btn btn-danger align-self-center" type="button">Log Out</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" d-md-none">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light navParentCon">
                        <a className="navbar-brand" href="www.google.com"><h1 className="pt-2 pb-2 h3"><span className="text-danger">ANGRY</span>BAAZ</h1></a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav text-center">
                                {navItems.map(eachItem => <li className={activeTab === eachItem.id ? " text-danger p-2" : ""} key={eachItem.id}><span>{eachItem.item}</span></li>)}
                                <button className="btn btn-danger align-self-center" type="button">Log Out</button>
                            </ul>
                        </div>
                    </nav>
                </div>
            </>
        )
    }
}


export default Header
import React, { useState } from "react";
import Suggestion from "../Suggestion/Suggestion";
import "./AutoSuggestion.css";


const AutoSuggestion = ({ suggestion }) => {
    const [search, setSearch] = useState("");
    const [showSuggestion, setShowSuggestion] = useState(false)

    const [employeeData, setEmployeeData] = useState(null)

    const [showEmployeeData, setShowEmployeeData] = useState(false);

    const handleSearch = e => {
        if (e.target.value !== "") {
            setShowSuggestion(true)
            setShowEmployeeData(false)
            setEmployeeData(null)
        } else {
            setShowSuggestion(false)
            setShowEmployeeData(false)
            setEmployeeData(null)
        }
        setSearch(e.target.value);
    }

    const selectOption = (employeeObject) => {
        setEmployeeData(employeeObject)
        setShowEmployeeData(true)
    }

    return (
        <div className="auto-suggestion-component">
            <input
                className="suggestion-input"
                type="text"
                placeholder="Type something..."
                value={search}
                onChange={handleSearch}
            />

            <div>
                {showSuggestion && (
                    <ul>
                        {suggestion
                            .filter(i => i.designation.title.toLocaleLowerCase().includes(search)
                            )
                            .map((i, key) => (
                                <li className="suggestion-list" key={key} onClick={() => selectOption(i)}>
                                    <Suggestion text={i.designation.title} highlight={search} />
                                </li>
                            ))}
                    </ul>
                )}

                {!showSuggestion && (
                    <p>Please type something...</p>
                )}
            </div>

            <div className="employee-data">

                {employeeData && showEmployeeData && (
                    <>
                        <p className="employee-data-heading">Employee Details: </p>
                        <p>{employeeData.designation.title}</p>
                        <p>{employeeData.designation.level}</p>
                        <p>{employeeData.designation.department}</p>
                    </>

                )}
            </div>

        </div>



    )

}

export default AutoSuggestion;
import react, { useState } from "react"
import "./Search.css"
var data=require("../MOCK_DATA.json")

const Search=()=>{

    const [value,setValue]=useState("")

    const onChange=(event)=>{
      setValue(event.target.value)
    }

    const onSearch=(searchTerm)=>{
     setValue(searchTerm)
        console.log("search",searchTerm)
    }


    return(
        <div className="App">
        <h1>Search</h1>

<div className="search-container">
    <div className="search-inner">
     <input type="text" value={value} onChange={onChange}></input>

     <button onClick={()=>onSearch(value)}>Search</button>
    </div>
    <div className="dropdown">
         {
            data.filter(item=>{
                const searchTerm=value.toLowerCase();
                const label=item.label.toLowerCase()

                return searchTerm && label.startsWith(searchTerm) && label !==searchTerm
            }).map((item)=><div onClick={()=>onSearch(item.label)} className="dropdown-row" key={item.label}>
            {item.label}

            </div>
         )}
    </div>

</div>
        </div>
    )
}


export default Search
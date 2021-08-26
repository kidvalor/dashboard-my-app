//we always need to import React in each component 

import React from 'react'

//we create our class Component
class Sidebar extends React.Component {
    render() {
        return(
            <div id="sidebar">
                 Dashboard 
                <br></br>
                Widget
                <br></br>
                Reviews
                <br></br>
                Customers
                <br></br>
                Online Analysis 
                <br></br>
                Settings
            </div>
        )
    }
}

export default Sidebar;
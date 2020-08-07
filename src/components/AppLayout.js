import React from 'react';
import Header from "./AppHeader";
import Footer from  "./AppFooter";



class Layout extends React.Component {
    constructor(props) {
        super(props);
       
    }
    componentDidMount() {

    }
    searchEvent(event) {
        this.props.filtertext(event.target.value);
    }

    render() {
        return (
            <div>
                
                <Header inputChange={(event) => this.searchEvent(event)} />
                    {this.props.children}
                <Footer />
            </div>
        )
    }
}


export default Layout;
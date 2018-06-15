import React from "react";
import ProfileComponent from "./profile";
import AccountComponent from "./account";
import PaymentComponent from "./payment";
import ProductComponent from "./product";
import SolutionComponent from "./solution";
import LogoutComponent from "./signout";

class EmptyComponent extends React.Component {
    components = {
        Profile: ProfileComponent,
        Account: AccountComponent,
        Payment: PaymentComponent,
        Product: ProductComponent,
        Solution: SolutionComponent,
        Logout: LogoutComponent
    }
    render() {
        let MyComponent = this.components[this.props.content];
        let pageTitle = this.props.page;
    return (
        <div className="page">
            <div className="page-header">
                <h2>{pageTitle}</h2>
            </div>
            <MyComponent />
        </div>
    );
  }
}

export default EmptyComponent;

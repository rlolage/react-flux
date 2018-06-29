import React from 'react';
import ProfileList from "./profileList"
var ProfilesApi = require("../../api/profilesApi");


class ProfilesPage extends React.Component {
    state = {profiles : []};


    componentWillMount() {
        this.setState({profiles : ProfilesApi.getAllProfiles()});
    }
    
    render() {
        return (
            <div>
                <ProfileList profiles={this.state.profiles}/>
            </div>
        )
    }       
}

export default ProfilesPage;
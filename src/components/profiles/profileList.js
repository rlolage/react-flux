import React from 'react';
var PropTypes = require("prop-types");

//Child components are dumb components.
//They use the data passed down to them via props by the top level components aka Controller Views.
//ProfileList is child component of top level component called ProfilesPage.
class ProfileList extends React.Component {
    render() {
        const createProfileRow = (profile) => {
            return (
                    <tr key={profile.id}>
                        <td><a href={"/#profiles/" + profile.id}>{profile.firstName} {profile.lastName}</a></td>
                        <td>{profile.battingStyle}</td>
                        <td>{profile.matches}</td>
                        <td>{profile.runs}</td>
                        <td>{profile.average}</td>
                        <td>{profile.highScore}</td>
                    </tr>
            );
        }

        return (
            <div className="jumbotron">
                <h1>Player Profiles</h1>
                <br/>
                <table className="table table-striped table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>Name</th>
                            <th>Batting Style</th>
                            <th>Matches</th>
                            <th>Runs</th>
                            <th>Average</th>
                            <th>High Score</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.profiles.map(createProfileRow)}
                    </tbody>
                </table>
            </div>
        )
    }       
}

//propTypes are a way of decalring expectations for this component.
//This is not present in the minified production version.
//Only available in development mode.
ProfileList.propTypes = {
    profiles: PropTypes.array.isRequired
};

export default ProfileList;
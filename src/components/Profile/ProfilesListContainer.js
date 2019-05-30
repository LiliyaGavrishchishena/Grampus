import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { profilesSelectors, profilesOperations } from '../../redux/profiles';
import ProfilesListView from './ProfilesListView';

class ProfilesListContainer extends Component {
  state = {};

  componentDidMount() {
    const { fetchAllProfiles } = this.props;

    fetchAllProfiles();
  }

  render() {
    const { profiles } = this.props;
    return (
      <div>
        <ProfilesListView profiles={profiles} />
      </div>
    );
  }
}
const mapStateToProps = state => ({
  profiles: profilesSelectors.getAllProfiles(state),
});

const mapDispatchToProps = {
  fetchAllProfiles: profilesOperations.fetchAllProfiles,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(ProfilesListContainer));

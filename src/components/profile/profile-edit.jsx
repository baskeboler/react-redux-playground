import React from 'react';
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup
} from 'react-bootstrap';
import {
  saveProfile as saveProfileAction,
  showModal
} from '../../actions/actions';
import { getProfile, getSelectedGiphy } from '../../selectors/index';
import { connect } from 'react-redux';
import GiphyInput from '../giphy/input-field';

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fields: props.profile
    };
  }

  render() {
    let fields = this.state.fields;
    let resetFields = () => (fields = Object.assign({}, this.props.profile));
    let fieldHandler = field => e =>
      this.setState({ fields: { [field]: e.currentTarget.value } });
    let handleSubmit = e => {
      e.preventDefault();
      this.props.saveProfile(fields);
      this.props.info('profile saved!');
    };
    return (
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <ControlLabel>user name</ControlLabel>
          <FormControl
            onChange={fieldHandler('username')}
            type="text"
            defaultValue={fields.username}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>birth date</ControlLabel>
          <FormControl
            onChange={fieldHandler('birthDate')}
            type="date"
            defaultValue={fields.birthDate}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>email</ControlLabel>
          <FormControl
            onChange={fieldHandler('email')}
            type="email"
            defaultValue={fields.email}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>picture</ControlLabel>
          <GiphyInput
            value={this.state.fields.picture}
            showModal={this.props.info}
            onselect={im =>
              this.setState({
                fields: {
                  picture: im
                }
              })}
          />
        </FormGroup>
        <FormGroup>
          <ControlLabel>bio</ControlLabel>
          <FormControl
            onChange={fieldHandler('bio')}
            componentClass="textarea"
            defaultValue={fields.bio}
          />
        </FormGroup>
        <Button type="submit">Save</Button>
        <Button type="reset" onClick={() => resetFields()}>
          Reset
        </Button>
      </Form>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    saveProfile: profile => {
      dispatch(saveProfileAction(profile));
    },
    info: (text, onclose) =>
      dispatch(
        showModal({
          type: 'Information',
          title: 'Information',
          message: text,
          onClose: onclose
        })
      )
  };
};
const mapStateToProps = state => {
  return {
    profile: getProfile(state),
    giphySelection: getSelectedGiphy(state)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);

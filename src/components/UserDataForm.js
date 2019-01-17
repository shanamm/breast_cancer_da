import React, { Component } from 'react';
import UserDataFields from './UserDataFields';
import jquery from 'jquery';

class UserDataForm extends Component {

  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      lump: '0',
      admin: '0'
    };
  }

  onChange = (e) => {
    this.setState({ [e.target.name] : e.target.value });
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.storeData(this.state);
    if (this.props.isModal) {
      jquery("#bcdaModal").modal("hide");
    }
  }

  render () {
    return (
      <div>
        <form onSubmit={ this.onSubmit }>
          <UserDataFields 
            admin={ this.state.admin }
            lump={ this.state.lump }
            onChange={ this.onChange } 
          />
          { this.props.isModal ?
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary btn-lg" data-dismiss="modal">Close</button>
              <button type="submit" className="btn btn-primary btn-lg">Submit</button>
            </div>
            :
            <button type="submit" className="btn btn-primary btn-lg">Submit</button>
          }
        </form>
      </div>
    );
  }
}

export default UserDataForm;

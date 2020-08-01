import React, { Component } from 'react';
import CalenderModal from '../calender-modal/calender-model.component';
import { fetchMembers } from '../../shared/api';
import './homepage.style.css';

class HomePage extends Component {

  state = {
    members: [],
    isModal: false,
    selectedMember: 0
  }
    
  componentDidMount(){
    fetchMembers().then(data => this.setState({ members: data }))
  }

  openModal = (memberIdx) => {
    this.setState({ isModal: true, selectedMember: memberIdx })
  }

  closeModal = () => this.setState({ isModal: false })
    
  render() {
    const { members, isModal, selectedMember } = this.state;
    return (
      <div className="container">
        {
          isModal ? <CalenderModal member={members[selectedMember]} isModal={isModal} closeModal={this.closeModal} /> : null
        }
        <h2 className="text-center my-4">List of Members</h2>
        <div className="d-flex">
          {
            members.map((member, index) => 
              <div className="card mx-2 members-card" key={index} onClick={() => this.openModal(index)}>
                <div className="card-body">
                  <h5 className="card-title text-center">{member.real_name}</h5>
                  <p className="card-text mb-1"><b>Id: </b>{member.id}</p>
                  <p className="card-text mb-1"><b>Time-zone: </b>{member.tz}</p>
                </div>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}

export default HomePage;
  
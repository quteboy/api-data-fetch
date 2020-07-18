import React, { Component } from "react";
import "./styles.css";
import UserModal from './UserModal'
export class UserCards extends Component {
  state = {
    people: [],
    isOpen: false,  //modal remains closed when page loads
  };
  //used async function to fetch data from api server
  async componentDidMount() {
    const url = "https://api.randomuser.me/?results=12"; //"/results=12 to limit data fetching"
    const res = await fetch(url);
    const data = await res.json();
    this.setState({ people: data.results });
    console.log('Ab', this.state.isOpen)
  }
  //created method to close modal on click
  handleOpenModal = () => {
    this.setState({ isOpen: !this.state.isOpen }); //this sets isOpen=false so that modal will close upon executing this method
  };
  render() {
    return (
      <div className="gallery">
        {/* used map method to map data over component this can be done with the forEach  */}
        {this.state.people.map((person) => (
          <div className="card">
               <img onClick={this.handleOpenModal} className="card-img" src={person.picture.large} alt={person.name.first}/>
            <div className="card-info-container cap">
              <div className="card-name">
                {person.name.first} {person.name.last}
              </div>
              <div className="card-text">{person.email}</div>
              <div>{person.location.city},{person.location.state}</div>
            </div>
           
          </div>
        ))}
        <UserModal
          isOpen={this.state.isOpen}
          onRequestClose={this.handleOpenModal}
          click={this.state.people}
        />
      </div>
    );
  }
}

export default UserCards;

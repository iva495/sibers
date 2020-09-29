import React from 'react';
import styles from './App.module.css';
import Header from './components/Header/Header'
import Contacts from './components/ListContacts/Contacts'
import Profile from './components/Profile/Profile'


class App extends React.Component 
{
    state = {
      data: [],
      showProfile:false,
      name:"",
      phone:"",
      website:"",
      username:"",
      company:[]
    }
//search for an element in an array and write data for a profile
  putData = (num) =>
  {
    let position;
    this.state.data.find((e, i) => {
      if(e.id == num) {
        position = i
        return;}
    })
    this.setState({showProfile: !this.state.showProfile});
    this.setState({phone: this.state.data[position].phone});
    this.setState({company: this.state.data[position].company});
    this.setState({website: this.state.data[position].website});
    this.setState({username: this.state.data[position].username});
    this.setState({avatar: this.state.data[position].avatar});
    this.setState({name: this.state.data[position].name});
    debugger
}

renameFn()
  {
    this.setState({showProfile: !this.state.showProfile});
    this.setState({data: JSON.parse(localStorage.getItem('mydata'))})
  }

closeProfile()
  {
    this.setState({showProfile: !this.state.showProfile});
  }

  componentWillMount()
  {
    console.log(localStorage.length);
    if(localStorage.length === 0){
      console.log('ajax');
      fetch('http://demo.sibers.com/users')
       .then((response) => response.json())
       .then((data) => {
        data.sort(function(a, b){
          if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
          if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        });
         this.setState({data: data})
        localStorage.setItem('mydata', JSON.stringify(data));
        });
      } else {
        console.log('localStorage');
        this.setState({data: JSON.parse(localStorage.getItem('mydata'))})
      }
  }

  render()
  {
    debugger
    return (
      <React.Fragment>
        <Header />
        { 
          this.state.showProfile ?       
          <div className={styles.profile}>
          <Profile renameFn={ () => this.renameFn() } closeProfile = { () => this.closeProfile()} plusCounter ={this.props.plusCounter} avatar={this.state.avatar} name={this.state.name} company={this.state.company} phone={this.state.phone} username={this.state.username} website={this.state.website}/>
          </div>: null 
        }
        { 
          this.state.data.length ?          
          <Contacts initialState = {this.state.data} putData ={this.putData}/> 
         :<h1>No data</h1>
        }
      </React.Fragment>
    )
  }
}

export default App;
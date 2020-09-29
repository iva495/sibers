import React from 'react'
import styles from './Contacts.module.css';
import Contact from './Contact'

class Contacts extends React.Component {
    
    state = {
        searchString:""
    }
//input in the edit field
     searchInputChangeHandler = (event) =>{
        this.setState({searchString: event.target.value})
     }
//filtering contacts
     filterContacts = () =>{
       return this.props.initialState.filter(contact => contact.name.includes(this.state.searchString));
     }

        render(){
            
            return (
                <div className={styles.contacts}>
                    <input placeholder="Search" value={this.state.searchString} onChange={this.searchInputChangeHandler}></input>
                    {this.filterContacts().map(element  => <Contact num={element.id} putData = {this.props.putData} avatar={element.avatar} name={element.name} company={element.company} phone={element.phone} username={element.username} website={element.website}/>)}
                </div>
            );
        }
      
 
}
    
export default Contacts;
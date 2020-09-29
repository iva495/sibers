import React from 'react'
import styles from './Profile.module.css'

class Profile extends React.Component {

    state={
        name:this.props.name,
        phone:this.props.phone,
        companyBs:this.props.company.bs,
        companyCatchPhrase:this.props.company.catchPhrase,
        companyName:this.props.company.name,
        website:this.props.website,
        username:this.props.username,
        data:[]
    }

        //editing user and writing to localStorage
    rename = () =>{
        let temp = this.state
         this.state.data = JSON.parse(localStorage.getItem('mydata'));
         this.state.data.forEach(function(item, index, array) {
             if(item.username == temp.username){
                 item.name = temp.name
                 item.phone = temp.phone
                 item.company.bs = temp.companyBs
                 item.company.catchPhrase = temp.companyCatchPhrase
                 item.company.name = temp.companyName
                 item.website = temp.website
             }
           });
           this.state.data.sort(function(a, b){
               if(a.name.toLowerCase() < b.name.toLowerCase()) return -1;
               if(a.name.toLowerCase() > b.name.toLowerCase()) return 1;
             });
           localStorage.setItem('mydata', JSON.stringify(this.state.data));

         this.props.renameFn();

         }
//string write functions
          renameName = (event) =>{this.setState({name: event.target.value})}
          renamePhone = (event) =>{this.setState({phone: event.target.value})}
          renameCompanyCatchPhrase = (event) =>{this.setState({companyCatchPhrase: event.target.value})}
          renameCompanyBs = (event) =>{this.setState({companyBs: event.target.value})}
          renameCompanyName = (event) =>{this.setState({companyName: event.target.value})}
          renameWebsite = (event) =>{this.setState({website: event.target.value})}

        render(){
            console.log(this.props);

            return (
                <div className={styles.profile}>
                    <p className={styles.buttonClose} onClick={this.props.closeProfile}> close </p>
                    <div className={styles.card}> 
                        <img src={this.props.avatar} className={styles.photo}></img> 
                        <input value={this.state.phone} className={styles.dataInput} onChange={this.renamePhone} ></input>
                        <input value={this.state.name} className={styles.dataInput} onChange={this.renameName} ></input>
                       <input value={this.state.website} className={styles.dataInput} onChange={this.renameWebsite} ></input>
                       <input value={this.state.companyBs} className={styles.title}  onChange={this.renameCompanyBs}></input>
                        <input value={this.state.companyCatchPhrase} className={styles.title} onChange={this.renameCompanyCatchPhrase}></input>
                        <input value={this.state.companyName} className={styles.title} onChange={this.renameCompanyName} ></input>
                        <p><button className={styles.rename} onClick={this.rename}>Rename</button></p>
                    </div>
                </div>
            )}
        }
export default Profile;
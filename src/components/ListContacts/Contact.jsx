import React from 'react'
import styles from './Contact.module.css';

class Contact extends React.Component {

    state={
        name:this.props.name,
        phone:this.props.phone,
        companyBs:this.props.company.bs,
        companyCatchPhrase:this.props.company.catchPhrase,
        companyName:this.props.company.name,
        website:this.props.website,
        username:this.props.username,
        data:[],
        showProfile: false
    }
//expanding the edit menu
    flipInformation = () =>{
        this.props.putData(this.props.num)
    }

        render(){
            return (
                <div >
                    <div className={styles.contact}> 
                        <img onClick={this.flipInformation} src={this.props.avatar}  className={styles.avatar} ></img>
                        
                        <div className={styles.information}> 
                            <h3>{this.props.company.bs}</h3>
                            <h3>{this.props.company.catchPhrase}</h3>
                            <h3>{this.props.company.name}</h3>
                        </div>
                        <div className={styles.information}> 
                            <h3>{this.props.name}</h3>
                            <h3>{this.props.website}</h3>
                        </div>
                        <h3  className={styles.information}>{this.props.phone}</h3>
                    </div>
                    { this.state.showProfile ? null
                    : null }
                </div>
            );}
}

export default Contact;
import React, { Component } from 'react';
import './HeaderAvatar.sass';

// import UikWidget from '../../components/Uik/UikWidget';
import { UikAvatar } from '../../dist/lib';
import '../../dist/lib/styles.css';

export class HeaderAvatar extends Component {
    render(){
        return (
            <div id="HeaderAvatar">
                <span className="profile-name">John Doe</span>
                <UikAvatar avatarPlaceholder={ {content: 'JD', color: 'violet'} }/>
            </div>
        )
    }
}

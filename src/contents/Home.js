import React, { Component } from 'react';
import Social from '../components/Social';
import ReactTypingEffect from 'react-typing-effect'

class Home extends Component {
    render() {
        return (
            <div className="condiv home">
                <img src="https://scontent.fbkk29-5.fna.fbcdn.net/v/t39.30808-6/364729418_2177758529085672_1264067175113431353_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFxHI5JJMA6Kzt4Z5XopTFnqMKGrzOOfbKowoavM459sqgLVqILFpTNIg8942_yu-SpwVTpmHFSbSTjYZMtaSjY&_nc_ohc=OEwKSKGTLmsAX88PCYn&_nc_ht=scontent.fbkk29-5.fna&oh=00_AfD3OR2g3VKG5TUCgKvnmMeYqC-C34aQBSDWZVb38RqyVQ&oe=6554F7E2" alt="profile" className="profilepic" />
                <ReactTypingEffect text={['I am Kampanart', 'I am a student at KMUTNB']} speed={80} eraseDelay={200} className="typingeffect" />
                <Social />
            </div>
        );
    }
}

export default Home;
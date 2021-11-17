import React from 'react';
import Option from './Option';

function About() {
    return (
        <div>
            <h2>About this project</h2>
            <p>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
                platform that elevates your screen to a more comfortable viewing
                height. Placing your monitor at eye level has the potential to
                improve your posture and make you more comfortable while at
                work, helping you stay focused on the task at hand. Featuring
                artisan craftsmanship, the simplicity of design creates extra
                desk space below your computer to allow notepads, pens, and USB
                sticks to be stored under the stand.
            </p>
            <Option
                title='Bamboo Stand'
                description="You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
                amount='25'
                stock='101'
            />
            <Option
                title='Black Edition Stand'
                description='You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.'
                amount='75'
                stock='64'
            />
            <Option
                title='Mahogany Special Edition'
                description='You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added  to our Backer member list. Shipping is included.'
                amount='200'
                stock='0'
                disable={true}
            />
        </div>
    );
}

export default About;
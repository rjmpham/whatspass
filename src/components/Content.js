// eslint-disable-next-line no-unused-vars
import React from 'react';
// eslint-disable-next-line no-unused-vars
import Divider from '@material-ui/core/Divider';
import Images from './Images.js';
import './Content.css';

export function Content(){

    var imageArr = Images();

    return (
        <div className="ExplainSection">
            <div className="Divider"><Divider variant="middle" /></div> 

            <div className= "ScrollingText">
                <h1>What is a Secure Password Anyways?</h1>
                <p> Secure passwords can be broken down into the following: lowercase letter,
                    uppercase letters, digits, and symbols. The distinction between lower 
                    and upper case letters is important to security, as using only one or 
                    the other makes a password less secure. Not using digits and symbols 
                    also makes passwords less secure. While passwords that have to have at
                    least one of each of these are not strictly random, it is better to enforce
                    these rules as it makes a user pick better passwords. Just look at 
                    this quote from 
                    a <a href="https://www.archive.ece.cmu.edu/~lbauer/papers/2012/usenix2012-meters.pdf" target="_blank" rel="noopener noreferrer">
                        paper</a> on
                    password meters: 
                </p>
                <div className="Quote">
                    <blockquote>Participants who saw stringent (strength) meters spent longer
                        creating their password and were more likely to change
                        their password while entering it.
                    </blockquote>
                </div>

                <p> What does it mean to be less random? If you think about it, an
                    attacker would then know that they need to look to check only passwords
                    that contain at least one lower case letter, an uppercase letter, digit
                    and symbol. 
                </p>
                <p> Random passwords can't be remembered easily however and a password that you
                    make isn't random. A solution is simply to make a few short remembrable 
                    random changes to a password that you came up with! Our generator does the 
                    leg work here however as it makes the human decision of picking remembrable
                    words and makes the changes for you.
                </p>

                <h1> So Really, What's in a Password?
                </h1>
                <p> The most common passwords are super simple but you should already know that.
                    Nobody reading this page is using <i className="Password">password1</i> right? 
                    Well, the most common things are words with some numbers. Take a look
                    this graphic from 
                    this <a href="http://vialab.science.uoit.ca/pwdates/2012-vizsec-visualizing-semantics-in-passwords.pdf" target="_blank" rel="noopener noreferrer">
                        paper</a> to see just how common things in the calender are used in passwords: 
                </p>
                {imageArr[0]}
                <p> Annotations on this bar point out interesting patterns in numeric or mixed passwords that 
                    contain date information. Far from being random, even among dates do people pick ones that 
                    are very common, like valentines day, and christmas. The format of what a date looks like 
                    in a password can be seen on the table below:
                </p>

                
                <div className = "TableDate">
                
                    {imageArr[1]}
                </div>
                <p> These passwords come in the form listed in this table found in the apendex of 
                    the <a href="http://vialab.science.uoit.ca/pwdates/2012-vizsec-visualizing-semantics-in-passwords.pdf" target="_blank" rel="noopener noreferrer">
                    paper</a>. As you can clearly see, the numbers included in passwords can 
                    be far from random. 
                </p>

                <p> The main attraction of dates are that they are things that you remmeber. But that 
                    also means that other people can guess them based on what they know about you. This 
                    is the case if they know you as a person, or know that you are a person (take that
                    robots!). 
                </p>

                <p> Consider again our main theme. What if you simple had something that you didn't already 
                    know but can remember if you tried a litte? Again, that's what our generator is for! We
                    will pick some (uncommon enough) words that you can forsure learn. But your friends and 
                    family could never guess these words. To prevent a computer from guessing we'll change it up
                    just enough that you can remmeber but the computer can't guess either! 

                </p>
            
                <p> Other common things people do for passwords include nouns. Names are the most common. The 
                    number of passwords that have the name John in them is very high. Just imigine the number 
                    of people using <i className="Password">JohnSmith1</i> as their password!

                </p>
            </div>
        </div>
    );
}

export default Content;
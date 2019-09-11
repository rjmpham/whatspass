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
                <h1>How Does the Generator Work?</h1>
                <p> Secure passwords can be broken down into the following: lowercase letter,
                    uppercase letters, digits, and symbols. The distinction between lower 
                    and upper case letters is important to security, as using only one or 
                    the other makes a password less secure. Not using digits and symbols 
                    also makes passwords less secure. While passwords that have to have at
                    least one of each of these are not strictly random, it is better to pay 
                    attention to these rules as it makes a user pick better passwords. Just
                    look at this quote from 
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
                {/*TODO link zxcvbn to zxcvbn*/}

                <p> If you strictly followed rules a sites give, an
                    attacker knows that they need to check passwords
                    that contain at least one lower case letter, an uppercase letter, digit
                    and symbol. If you are too random, your password will not be remembered easily
                    and at that point you should use a password tool, and full diclaimer, we reccomend 
                    using one. If you want another solution, or to remember your own passwords, or
                    are simply curious as to how passwords work, our generator does the 
                    leg work here picking remembrable words and making some random modifications for you.
                </p>

                <p> The password generatred is then checked by a password strength estimator called 
                    'zxcvbn' that recognizes and weighs 30k common passwords, common names and surnames 
                    according to US census data, popular English words from Wikipedia and US television 
                    and movies, and other common patterns like dates, repeats (`aaa`), sequences 
                    (`abcd`), keyboard patterns (`qwertyuiop`), and l33t speak. The creators of zxcvbn 
                    point out that passwords with one of each type of symbol can still be weak
                    like <i className="Password">P@sword1</i> so their strength estimator cares more about
                    randomness, average number of guesses to solve, and use of uncommon words or phrases.
                </p>

                <p> A strong password would take ten to the ten guesses to be guessed on average. Which is 
                    a very large amount of guesses, and that is a lowerbound. To to answer the question
                    how does out generator work, it uses a random word selector to make a easy to 
                    remember a password, and then uses the quality assurance of zxcvbn to generate a 
                    password. The rest of the site is devoted to explaining some interesting facts about
                    what's in a password.



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
import React from 'react';
import PropTypes from 'prop-types';
import '../App.css';
import {connect} from 'react-redux';
import {bindAll} from 'lodash';
import Input from './Input';
import Textarea from './Textarea';
import {submitForm} from '../actions/ContactActions';

class ContactPage extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired
    };

	constructor(props) {
		super(props);

		this.state = {
			name: '',
			email: '',
			text: '',
            errorName: '',
            errorEmail: ''
		};

		bindAll(this, ['changeName', 'changeEmail', 'changeText', 'submit', '_isFormValid', '_isValidName', '_isValidEmail']);
	}

	changeName(name) {
		this.setState({name});
	}

	changeEmail(email) {
		this.setState({email});
	}

	changeText(text) {
		this.setState({text});
	}

	submit(event) {
		event.preventDefault();

		if(this._isFormValid()) {
            this.props.dispatch(submitForm(this.state.name, this.state.email, this.state.text));

            this.setState({
                name: '',
                email: '',
                text: ''
            });
		}
	}

	_isFormValid() {
		return this._isValidName(this.state.name) && this._isValidEmail(this.state.email);
	}

	_isValidName(name) {
        let isValid = true,
            errorName = '';

		if (name.length === 0) {
            errorName = 'Заполните это поле.';

            isValid = false;
        }

        this.setState({errorName});

		return isValid;
	}

	_isValidEmail(email) {
        let isValid = true,
            errorEmail = '';

        if (!email.includes('@') && !email.includes('.')) {
            errorEmail = 'Заполните это поле.';

            isValid = false;
        }

        this.setState({errorEmail});

        return isValid;
	}

    render() {
        return (
            <section className='contacts-page'>
                <div className='contacts-page--content container'>
                    <div className='contacts-page--head section--head'>
                        <h1 className='section--title'>Get in touch</h1>
                        <div className='section--subtitle'>Let us know <br/>how we can help</div>
                    </div>
                    <div className='contacts-page--body'>
                        <div className='contact--form-wrapper'>
                            <form className='contact--form' method='post' action='' name='getintouch'
                                  data-netlify='true' data-netlify-honeypot='bot-field'>
                                <Input
                                    onChange={this.changeName}
                                    value={this.state.name}
                                    errorName={this.state.error}
                                    type='Name'
                                />
                                <Input
                                    onChange={this.changeEmail}
                                    value={this.state.email}
                                    errorEmail={this.state.error}
                                    type={'E-mail'}
                                />
                                <Textarea
                                    onChange={this.changeText}
                                    value={this.state.text}
                                    type={'Message'}
                                />

                                <button type='submit' onClick={this.submit} className='link-button dark wide'>Send
                                </button>
                                {/*<input type='text' name='name' className='contact--form-input' placeholder='Name' required='' />*/}
                                {/*<input type='email' name='email' className='contact--form-input' placeholder='E-mail' required='' />*/}
                                {/* <input type='tel' name='phone' class='contact--form-input' placeholder='Phone number' /> */}
                                {/*<textarea name='message' className='contact--form-input' placeholder='Message'></textarea>*/}

                            </form>
                        </div>
                        <div className='contacts-page--next'>
                            <h3 className='contacts-page--next-title'>What's next</h3>
                            <p>We’ll contact you within a few hours with our next steps. We normally schedule a call
                                with our engineers to discuss your project in more detail. If you’d like to sign an NDA,
                                please let us know. We’ll prepare it for you.</p>
                            <p>Since we live on two different continents (Australia and Europe) we are available around
                                the clock.</p>
                        </div>
                    </div>
                </div>
                <div className='hidden'>
                    <div className='popup--content popup--content-result'>
                        <h3>Thanks for filling out our form!</h3>
                        <p>We will look over your message and Tatiana will get back to you in 24 hours. In the meantime,
                            you can check the <a href='/foundation'>Foundation</a> section, look over our <a
                                href='/experience'>projects collection</a> or browse through our latest <a href='/blog'>blog
                                posts</a>.</p>
                        <p>Your mate at MadAppGang, Jack Rudenko.</p>
                        <div className='link-button dark wide popup-content--ok'>OK</div>
                    </div>
                </div>
            </section>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(mapStateToProps) (ContactPage);

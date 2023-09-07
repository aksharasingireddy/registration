// Write your JS code here
import {Component} from 'react'

import './index.css'

class RegistrationForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    showFirstNameError: false,
    showLastNameError: false,
    isFormSubmitted: false,
  }

  onBlurLastName = () => {
    const isValidLastName = this.isValidLastName()
    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    this.setState({lastName: event.target.value})
  }

  renderLastNameField = () => {
    const {lastName, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <>
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className="username-input-field"
          value={lastName}
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
          placeholder="Last name"
        />
      </>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.isValidFirstName()
    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    this.setState({firstName: event.target.value})
  }

  renderFirstNameField = () => {
    const {firstName, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <>
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
          placeholder="First name"
        />
      </>
    )
  }

  ValidFirstName = () => {
    const {firstName} = this.state
    return firstName !== ''
  }

  ValidLastName = () => {
    const {lastName} = this.state
    return lastName !== ''
  }

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.ValidFirstName()
    const isValidLastName = this.ValidLastName()

    if (isValidFirstName && isValidLastName) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        isFormSubmitted: false,
      })
    }
  }

  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError} = this.state
    return (
      <form className="form-container" onSubmit={this.submitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-message">Required</p>}
        <button type="submit" className="login-button">
          Submit
        </button>
      </form>
    )
  }

  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstName: '',
      lastName: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <div className="success-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
        alt="success"
        className="success-img"
      />
      <p>Submitted Successfully</p>
      <button
        type="submit"
        className="login-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </div>
  )

  render() {
    const {isFormSubmitted} = this.state
    return (
      <div className="login-form-container">
        <h1 className="heading">Registration</h1>
        {isFormSubmitted
          ? this.renderSubmissionSuccessView()
          : this.renderRegistrationForm()}
      </div>
    )
  }
}

export default RegistrationForm

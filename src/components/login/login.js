import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LOGIN } from '../actions/login';
import swal from 'sweetalert';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginError: false,
      email: "",
      passwordError: false,
      password: "",

    }
    this.validation = this.validation.bind(this);
    this.handleinputchange = this.handleinputchange.bind(this);
  }
  validation() {
    const email=this.state.email;
    const password=this.state.password 
    if (email) {
      if (email.length < 3) {
        this.setState({ loginError: false, color0: "red" })
      }
      else {
        this.setState({ loginError: false,  color0: "" })
      }
    }
    else {
      this.setState({ loginError: true, color0: "red" })
    }

    if (password) {
      if (password.length < 2) {
        this.setState({ passwordError: false,  color1: "red" })
      }
      else {
        this.setState({ passwordError: false, color1: "" })
      }
    }
    else {
      this.setState({ passwordError: true,color1: "red" })
    }
    if (email &&  password) {
      swal("Login Success!", {
        buttons: false,
        timer: 2000,
        icon:"success"
      });
       this.setState({ email: '', password: '' });
    }else{
      swal("Please enter email and password", {
        buttons: false,
        timer: 2000,
        icon:"error"
      });
      console.log(this.props.loginreducer.loginInfo)
    }
    const formData = {
      email: this.state.email,
      password: this.state.password,
    }
    this.props.AC_LOGIN(formData);
    console.log('-=value-=', formData)
  }
  handleinputchange(event) {
    const fieldId = event.target.id;
    const fieldValue = event.target.value;

    if (fieldId === "login") {
      this.setState({ email: fieldValue })
      if (fieldValue) {
        if (fieldValue.length < 5) {
          this.setState({ loginError: false, color0: 'red' })
        }
        else {
          this.setState({ loginError: false, color0: '' })
        }
      }
      else {
        this.setState({ loginError: true, color0: '' })
      }
    }

    if (fieldId === "password") {
      this.setState({ password: fieldValue })
      if (fieldValue) {
        if (fieldValue.length < 5) {
          this.setState({ passwordError: false, color1: 'red' })
        }
        else {
          this.setState({ passwordError: false, color1: '' })
        }
      }
      else {
        this.setState({ passwordError: true, color1: '' })
      }
    }
  }

  render() {
    // Redirect={}
    return (
      <>
        <div class="container-scroller">
          <div class="container-fluid page-body-wrapper full-page-wrapper">
            <div class="content-wrapper d-flex align-items-center auth px-0">
              <div class="row w-100 mx-0">
                <div class="col-lg-4 mx-auto">
                  <div class="auth-form-light text-left py-5 px-4 px-sm-5">
                    <h6 class="fw-light">Sign in to continue...</h6>
                    <form class="pt-3">
                      <div class="form-group">
                      <div>Enter your email</div>
                        <input type="text" class="form-control form-control-lg" id="login" onChange={this.handleinputchange} value={this.state.login} placeholder="Email" autoComplete='off'/>
                        {this.state.loginError ? <label className="mt-2" style={{ color: 'red' }}>Email is required</label> : ""}
                      </div>
                      <div class="form-group">
                        <div>Enter Password</div>
                        <input type="password" class="form-control form-control-lg" id="password" onChange={this.handleinputchange} value={this.state.password} placeholder="Password" />
                        {this.state.passwordError ? <label className="mt-2" style={{ color: 'red' }}>Password should be atleast 5 characters</label> : ""}
                      </div>
                      <div class="mt-3">
                        <a class="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn" onClick={this.validation}>Sign in</a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}


function mapStateToProps(state) {
  console.log('map state', state);
  return {
    loginreducer: state.loginReducer
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AC_LOGIN }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
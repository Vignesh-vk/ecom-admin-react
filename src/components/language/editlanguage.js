// import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { AC_LIST_LANGUAGE, AC_ADD_LANGUAGE, AC_VIEW_LANGUAGE, AC_HANDLE_INPUT_CHANGE } from '../actions/language';
// // import swal from 'sweetalert';
// class Editlanguage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             code: '',
//             codeError: false,
//             codeCountError: false,
//             name: '',
//             nameError: false,
//             nameCountError: false,
//             status: '',
//             statusError: false,
//         }
//         this.validation = this.validation.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//     }

//     validation() {
//         const name = this.props.languageReducer.languageInfo.name;
//         const code = this.props.languageReducer.languageInfo.code;
//         const status = this.props.languageReducer.languageInfo.status;
//         const id = this.props.languageReducer.languageInfo.id;
//         let formData = {
//             name : name,
//             code : code,
//             status : status,
//             id : id
//         }
//         console.log("-=-formData=-=-",formData);
//         this.props.AC_ADD_LANGUAGE(formData);
//     }

//     handleInputChange(event) {
//         let name = event.target.id;
//         let value = event.target.value;
//         this.props.AC_HANDLE_INPUT_CHANGE(name,value);
//     }
//     componentWillMount() {
//         let languageId = this.props.match.params.id;
//         let formData = {id:languageId}
//         this.props.AC_VIEW_LANGUAGE(formData);
//     }


//     render() {
//         const name = this.props.languageReducer.languageInfo.name;
//         const code = this.props.languageReducer.languageInfo.code;
//         const status = this.props.languageReducer.languageInfo.status;
//         return (
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-6 grid-margin stretch-card">
//                         <div className="card">
//                             <div className="card-body">
//                                 <h4 className="card-title">Edit language</h4>
//                                 <form className="forms-sample" id="editlanguage">
//                                     <div className="form-group">
//                                         <label for="exampleInputUsername1">NAME</label>
//                                         <input type="text" autoComplete='off' placeholder="Name" id="name" value={name} onChange={this.handleInputChange} style={{ borderColor: this.state.color0 }} className="form-control" />
//                                         {this.state.nameError ? <label className="mt-2" style={{ color: 'red' }}>Name is required</label> : ""}

//                                     </div>
//                                     <div className="form-group">
//                                         <label for="exampleInputUsername1">CODE</label>
//                                         <input type="text" autoComplete='off' placeholder="Code" id="code" value={code} onChange={this.handleInputChange} style={{ borderColor: this.state.color1 }} className="form-control" />
//                                         {this.state.codeError ? <label className="mt-2" style={{ color: 'red' }}>Code is required</label> : ""}

//                                     </div>
//                                     <div className="form-group">
//                                         <label for="exampleInputUsername1">STATUS</label>
//                                         <select className="form-control" id="status" style={{ outline: this.state.color2 }} onChange={this.handleInputChange} >
//                                             <option value="">Select Status</option>
//                                             <option value="true" selected={status == true}>Active</option>
//                                             <option value="false" selected={status == false}>Inactive</option>
//                                         </select>
//                                         {this.state.statusError ? <label className="mt-2" style={{ color: 'red' }}>Status is required</label> : ""}
//                                     </div>
//                                     <button type="button" className="btn btn-gradient-primary me-2" style={{
//                                         backgroundColor: 'blue',
//                                         color: 'white'
//                                     }} onClick={this.validation}>Submit</button>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }
// function mapStateToProps(state) {
//     console.log('map state =====================', state);
//     return {
//         languageReducer: state.LANGUAGE_Reducer
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ AC_LIST_LANGUAGE, AC_ADD_LANGUAGE, AC_VIEW_LANGUAGE,AC_HANDLE_INPUT_CHANGE }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(Editlanguage)




import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LIST_LANGUAGE, AC_ADD_LANGUAGE, AC_VIEW_LANGUAGE, AC_HANDLE_INPUT_CHANGE } from '../actions/language';
import { Redirect } from 'react-router-dom';
// import swal from 'sweetalert';
class Editlanguage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            code: '',
            codeError: false,
            codeCountError: false,
            name: '',
            nameError: false,
            nameCountError: false,
            status: '',
            statusError: false,
            editStatus:false,
        }
        this.validation = this.validation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.back=this.back.bind(this);
    }

    validation() {
        const name = this.props.languageReducer.languageInfo.name;
        const code = this.props.languageReducer.languageInfo.code;
        const status = this.props.languageReducer.languageInfo.status;
        const id = this.props.languageReducer.languageInfo.id;
        let formData = {
            name : name,
            code : code,
            status : status,
            id : id
        }
        console.log("-=-formData=-=-",formData);
        this.props.AC_ADD_LANGUAGE(formData);
    }

    handleInputChange(event) {
        let name = event.target.id;
        let value = event.target.value;
        this.props.AC_HANDLE_INPUT_CHANGE(name,value);
    }
    componentWillMount() {
        let languageId = this.props.match.params.id;
        let formData = {id:languageId}
        this.props.AC_VIEW_LANGUAGE(formData);
    }
    back(){
        this.setState({ editStatus: true })
      }
    render() {
        const name = this.props.languageReducer.languageInfo.name;
        const code = this.props.languageReducer.languageInfo.code;
        const status = this.props.languageReducer.languageInfo.status;
        if (this.state.editStatus) {
            return <Redirect to='/Listlanguage' />
          }
        return (
            <div className="container-fluid">
                <h3 class="page-title"><span class="page-title-icon bg-gradient-primary text-white me-2" style={{ marginLeft: '37px', marginTop: '47px' }}><i class="mdi mdi-comment-plus-outline"></i></span>Edit Language</h3>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample" id="editFaq">
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Language</label>
                                        <input type="text" autoComplete='off' placeholder="Language" id="name" value={name} onChange={this.handleInputChange} style={{ borderColor: this.state.color0 }} className="form-control" />
                                        {this.state.languageError ? <label className="mt-2" style={{ color: 'red' }}>Language is required</label> : ""}
                                        {this.state.languageCountError ? <label className="mt-2" style={{ color: 'red' }}>Language should be atleast 1 characters</label> : ""}

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Code</label>
                                        <input type="text" autoComplete='off' placeholder="Code" id="code" value={code} onChange={this.handleInputChange} style={{ borderColor: this.state.color1 }} className="form-control" />
                                        {this.state.codeError ? <label className="mt-2" style={{ color: 'red' }}>Code is required</label> : ""}
                                        {this.state.codeCountError ? <label className="mt-2" style={{ color: 'red' }}>Code should be atleast 2 characters</label> : ""}

                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">Status</label>
                                        <select className="form-control" id="status" style={{ outline: this.state.color2 }} onChange={this.handleInputChange} >
                                            <option value="">Select Status</option>
                                            <option value="true" selected={status == true}>Active</option>
                                            <option value="false" selected={status == false}>Inactive</option>
                                        </select>
                                        {this.state.statusError ? <label className="mt-2" style={{ color: 'red' }}>Status is required</label> : ""}
                                    </div>
                                    <button type="button" className="btn btn-gradient-primary me-2" style={{
                                        backgroundColor: 'blue',
                                        color: 'white',
                                        borderRadius:'2rem'
                                    }} onClick={this.validation}>Submit</button>
                                    <button type="button" className="btn btn-gradient-primary me-2" style={{
                                        backgroundColor: 'blue',
                                        color: 'white',
                                        borderRadius:'2rem'
                                    }} onClick={this.back}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
function mapStateToProps(state) {
    console.log('map state =====================', state);
    return {
        languageReducer: state.LANGUAGE_Reducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_LIST_LANGUAGE, AC_ADD_LANGUAGE, AC_VIEW_LANGUAGE,AC_HANDLE_INPUT_CHANGE }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Editlanguage);
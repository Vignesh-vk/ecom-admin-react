// import React from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { AC_ADD_IMAGE, AC_LIST_IMAGES, AC_VIEW_IMAGE, AC_HANDLE_INPUT_CHANGE } from '../actions/category';
// import { Redirect } from 'react-router-dom';


// class editImage extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             category: '',
//             categoryError: false,
//             categoryCountError: false,
//             file: {},
//             fileError: '',
//             status: '',
//             statusError: false,
//             editStatus: false
//         }
//         this.validation = this.validation.bind(this);
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.back = this.back.bind(this);
//     }
//     validation() {
//         const category = this.props.imagesReducer.editImage.category;
//         const filename = this.props.imagesReducer.editImage.filename;
//         const status = this.props.imagesReducer.editImage.status;
//         const id = this.props.imagesReducer.editImage.id;
//         let formData = {
//             category: category,
//             filename: filename,
//             status: status,
//             id: id
//         }
//         console.log("-=-formData=-=-", formData);
//         this.props.AC_ADD_IMAGE(formData);

//     }
//     handleInputChange(event) {
//         let category = event.target.id;
//         let value = event.target.value;
//         this.props.AC_HANDLE_INPUT_CHANGE(category, value);
//     }
//     back() {
//         this.setState({ editStatus: true });
//     }
//     componentWillMount() {
//         let imageId = this.props.match.params.id;
//         let formData = { id: imageId }
//         this.props.AC_VIEW_IMAGE(formData);
//     }
//     render() {
//         const category = this.props.imagesReducer.editImage.category;
//         const filename = this.props.imagesReducer.editImage.filename;
//         const status = this.props.imagesReducer.editImage.status;
//         if (this.state.editStatus) {
//             return <Redirect to='/listImages' />
//         }

//         return (
//             <div className="container-fluid">
//                 <div className="row">
//                     <div className="col-md-6 grid-margin stretch-card">
//                         <div className="card">
//                             <div className="card-body">
//                                 <form className="forms-sample" id="editImage">
//                                     <div class="page-header">
//                                         <h3 class="page-title">
//                                             <span class="page-title-icon bg-gradient-primary text-white me-2">
//                                                 <i class="mdi mdi-home"></i>
//                                             </span> Edit Image
//                                         </h3>
//                                         <nav aria-label="breadcrumb">
//                                             <ul class="breadcrumb">
//                                                 <li class="breadcrumb-item active" aria-current="page">
//                                                     <span></span>Overview <i class="mdi mdi-alert-circle-outline icon-sm text-primary align-middle"></i>
//                                                 </li>
//                                             </ul>
//                                         </nav>
//                                     </div>
//                                     <div className="form-group">
//                                         <label for="exampleInputUsername1">CATEGORY</label>
//                                         <input type="text" autoComplete='off' placeholder="Category" id="category" value={category} className="form-control" onChange={this.handleInputChange} />
//                                         {this.state.categoryError ? <label className="mt-2" style={{ color: 'red' }}>Categroy is required</label> : ""}
//                                         {this.state.categoryCountError ? <label className="mt-2" style={{ color: 'red' }}>Categroy should be atleast 5 characters</label> : ""}
//                                     </div>
//                                     <div className="form-group">
//                                         <label for="exampleInputUsername1">IMAGE</label>
//                                         <td ><img className='="img-thumbnail' style={{ width: "200px", height: "200px" }} src={"http://localhost:8000/uploads/" + filename} onChange={this.handleInputChange}></img></td><br />
//                                         <input type="text" autoComplete='off' placeholder="Filename" value={filename} id="filename" className="form-control" />
//                                         {this.state.fileError ? <label className="mt-2" style={{ color: 'red' }}>Image is required</label> : ""}
//                                     </div>
//                                     <div className="form-group">
//                                         <label for="exampleInputUsername1">STATUS</label>
//                                         <select className="form-control" id="status" style={{ backgroundColor: 'white' }} onChange={this.handleInputChange}>
//                                             <option value="Status">Select Status</option>
//                                             <option value="active" selected={status == true} >Active</option>
//                                             <option value="inactive" selected={status == false}>Inactive</option>
//                                         </select>
//                                         {this.state.statusError ? <label className="mt-2" style={{ color: 'red' }}>Status is required</label> : ""}
//                                     </div>
//                                     <button type="button" className="btn btn-gradient-primary me-2" style={{ backgroundColor: 'blue', color: 'white' }} onClick={this.validation}>Submit</button>
//                                     <button type="button" className="btn btn-gradient-primary me-2" style={{ backgroundColor: 'blue', color: 'white' }} onClick={this.back}>Back</button>
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
//     console.log('map state==================edit image', state);
//     return {
//         imagesReducer: state.imagesReducer
//     }
// }
// function mapDispatchToProps(dispatch) {
//     return bindActionCreators({ AC_ADD_IMAGE, AC_LIST_IMAGES, AC_VIEW_IMAGE, AC_HANDLE_INPUT_CHANGE }, dispatch)
// }
// export default connect(mapStateToProps, mapDispatchToProps)(editImage);


import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_ADD_IMAGE, AC_LIST_IMAGES, AC_VIEW_IMAGE, AC_HANDLE_INPUT_CHANGE } from '../actions/category';
import { Redirect } from 'react-router-dom';


class editImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewStatus: false,
        }
        this.back = this.back.bind(this);
        this.inputchange=this.inputchange.bind(this)
    }

    back() {
        this.setState({ viewStatus: true });
    }
    componentWillMount() {
        let imageId = this.props.match.params.id;
        let formData = { id: imageId }
        this.props.AC_VIEW_IMAGE(formData);
    }
    validation() {
        const category = this.props.imagesReducer.editImage.category;
        const filename = this.props.imagesReducer.editImage.filename;
        const status = this.props.imagesReducer.editImage.status;
        const id = this.props.imagesReducer.editImage.id;
        let formData = {
            category: category,
            filename: filename,
            status: status,
            id: id
        }
        console.log("-=-formData=-=-", formData);
        this.props.AC_ADD_IMAGE(formData);
    }
    inputchange(event) {
        let category = event.target.id;
        let value = event.target.value
        this.props.AC_HANDLE_INPUT_CHANGE(category, value)
      }
    render() {
        const category = this.props.imagesReducer.imageInfo.category;
        var datalist = this.props.imagesReducer.listImages;
        const filename = this.props.imagesReducer.imageInfo.filename;
        const status = this.props.imagesReducer.imageInfo.status;
        if (this.state.viewStatus) {
            return <Redirect to='/listImages' />
        }

        return (
            <div className="container-fluid">
                <h3 class="page-title"><span class="page-title-icon bg-gradient-primary text-white me-2" style={{ marginLeft: '37px', marginTop: '47px' }}><i class="mdi mdi-comment-plus-outline"></i></span>Edit Page</h3>
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <form className="forms-sample" id="editImage">
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">CATEGORY</label>
                                        <input type="text" autoComplete='off' onChange={this.inputchange} placeholder="Category" id="category" value={category} className="form-control"  />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">IMAGE</label>
                                        <td ><img className='="img-thumbnail' style={{width:"100px",height:"100px"}} src={"http://localhost:8000/uploads/" +filename}></img></td><br/>
                                        <input type="file" id="upload" ref="file" name="user[image]" multiple="true" onChange={this.inputchange} style={{ borderColor: this.state.color1, }}></input>
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">STATUS</label>
                                        <select className="form-control" id="status"  style={{ backgroundColor: 'white' }} >
                                            <option value="Status">Select Status</option>
                                            <option value="active" selected={status == true} >Active</option>
                                            <option value="inactive" selected={status == false}>Inactive</option>
                                        </select>
                                    </div>
                                    <button type="button" className="btn btn-gradient-primary me-2" style={{
                                        backgroundColor: 'blue',
                                        color: 'white'
                                    }} onClick={this.validation}>Submit</button>
                                    <button type="button" className="btn btn-gradient-primary me-2" style={{
                                        backgroundColor: 'blue',
                                        color: 'white'
                                    }} onClick={this.back}>Back</button>
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
    console.log('map state', state);
    return {
        imagesReducer: state.imagesReducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_ADD_IMAGE, AC_LIST_IMAGES, AC_VIEW_IMAGE, AC_HANDLE_INPUT_CHANGE }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(editImage);

import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_ADD_IMAGE, AC_LIST_IMAGES, AC_VIEW_IMAGE, AC_HANDLE_INPUT_CHANGE } from '../actions/category';
import { Redirect } from 'react-router-dom';


class editImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            category: '',
            categoryError: false,
            categoryCountError: false,
            file: {},
            fileError: '',
            status: '',
            statusError: false,
            editStatus:false
        }
        this.validation = this.validation.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
        this.back = this.back.bind(this);
    }
    validation(){
        const category = this.props.imagesReducer.editImage.category;
        const filename = this.props.imagesReducer.editImage.filename;
        const status = this.props.imagesReducer.editImage.status;
        const id = this.props.imagesReducer.editImage.id;
        let formData = {
            category : category,
            filename : filename,
            status : status,
            id : id
        }
        console.log("-=-formData=-=-",formData);
        this.props.AC_ADD_IMAGE(formData);

    }
    handleInputChange(event){
        let category = event.target.id;
        let value = event.target.value;
        this.props.AC_HANDLE_INPUT_CHANGE(category,value);

    }


    back() {
        this.setState({ editStatus: true });
    }
    componentWillMount() {
        let imageId = this.props.match.params.id;
        let formData = { id: imageId }
        this.props.AC_VIEW_IMAGE(formData);
    }

    render() {
        const category = this.props.imagesReducer.editImage.category;
        const filename = this.props.imagesReducer.editImage.filename;
        const status = this.props.imagesReducer.editImage.status;
        if (this.state.editStatus) {
            return <Redirect to='/listImages' />
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Edit Image</h4>
                                <form className="forms-sample" id="editImage">
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">CATEGORY</label>
                                        <input type="text" autoComplete='off' placeholder="Category" id="category" value={category} className="form-control" onChange={this.handleInputChange} />
                                        {this.state.categoryError ? <label className="mt-2" style={{ color: 'red' }}>Categroy is required</label> : ""}
                                        {this.state.categoryCountError ? <label className="mt-2" style={{ color: 'red' }}>Categroy should be atleast 5 characters</label> : ""}
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">IMAGE</label>
                                        <td ><img className='="img-thumbnail' style={{ width: "200px", height: "200px" }} src={"http://localhost:8000/uploads/" + filename} onChange={this.handleInputChange}></img></td><br />
                                        <input type="text" autoComplete='off' placeholder="Filename" value={filename} id="filename" className="form-control" />
                                        {this.state.fileError ? <label className="mt-2" style={{ color: 'red' }}>Image is required</label> : ""}
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">STATUS</label>
                                        <select className="form-control" id="status" value={status} style={{ backgroundColor: 'white' }} onChange={this.handleInputChange}>
                                            <option value="Status">Select Status</option>
                                            <option value="active" selected={status == true} >Active</option>
                                            <option value="inactive" selected={status == false}>Inactive</option>
                                        </select>
                                        {this.state.statusError ? <label className="mt-2" style={{ color: 'red' }}>Status is required</label> : ""}
                                    </div>
                                    <button type="button" className="btn btn-gradient-primary me-2" style={{ backgroundColor: 'blue', color: 'white' }} onClick={this.validation}>Submit</button>
                                    <button type="button" className="btn btn-gradient-primary me-2" style={{ backgroundColor: 'blue', color: 'white' }} onClick={this.back}>Back</button>
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

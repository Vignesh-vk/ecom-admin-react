import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_ADD_IMAGE, AC_LIST_IMAGES, AC_VIEW_IMAGE, AC_HANDLE_INPUT_CHANGE } from '../actions/category';
import { Redirect } from 'react-router-dom';


class viewImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewStatus: false,
        }
        this.back = this.back.bind(this);
    }

    back() {
        this.setState({ viewStatus: true });
    }
    componentWillMount() {
        let imageId = this.props.match.params.id;
        let formData = { id: imageId }
        this.props.AC_VIEW_IMAGE(formData);
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
                <div className="row">
                    <div className="col-md-6 grid-margin stretch-card">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">View Image</h4>
                                <form className="forms-sample" id="editImage">
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">CATEGORY</label>
                                        <input type="text" autoComplete='off' placeholder="Category" id="category" value={category} className="form-control" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">IMAGE</label>
                                        <td ><img className='="img-thumbnail' style={{width:"200px",height:"200px"}} src={"http://localhost:8000/uploads/" +filename}></img></td><br/>
                                        <input type="text" autoComplete='off' placeholder="Filename" value={filename} id="filename" className="form-control" disabled />
                                    </div>
                                    <div className="form-group">
                                        <label for="exampleInputUsername1">STATUS</label>
                                        <select className="form-control" id="status" value={status} style={{ backgroundColor: 'white' }} disabled>
                                            <option value="Status">Select Status</option>
                                            <option value="active" selected={status == true} >Active</option>
                                            <option value="inactive" selected={status == false}>Inactive</option>
                                        </select>
                                    </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(viewImage);

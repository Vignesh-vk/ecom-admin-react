import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_ADD_IMAGE, AC_LIST_IMAGE } from '../actions/image';

class addImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filename: ''
        }
        this.validation = this.validation.bind(this);
    }

    validation() {
        const filename = this.state.filename;
        const formData = {
            filename: filename,
        }
        this.props.AC_ADD_IMAGE(formData);
        console.log('========Form data========', formData)
    }


    render() {
        return (
            <div class="container-fluid pages" style={{ width: '600px', marginRight: '611px' }}>
                <h3 class="page-title"><span class="page-title-icon bg-gradient-primary text-white me-2" style={{ marginLeft: '37px', marginTop: '47px' }}><i class="mdi mdi-comment-plus-outline"></i></span>Add Image</h3>
                <div class="col-12 grid-margin stretch-card">
                    <div class="card" >
                        <div class="card-body">
                            <form class="forms-sample" autoComplete='off'>
                                <div class="form-group">
                                    <h5 style={{ fontSize: '0.875rem' }}>Image</h5>
                                    <input type="file" placeholder="Add your file" id="image" class="form-control" ></input>
                                </div>
                                <button type="button" class="btn btn-gradient-primary me-2" style={{ backgroundColor: 'blue', color: 'white', borderRadius: '2rem' }} onClick={this.validation}>Submit</button>
                                <button type="button" class="btn btn-gradient-primary me-2" style={{ backgroundColor: 'blue', color: 'white', borderRadius: '2rem' }} onClick={this.validation}>Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('map state', state);
    return {
        imageReducer: state.IMAGE_Reducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_ADD_IMAGE, AC_LIST_IMAGE }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(addImage);

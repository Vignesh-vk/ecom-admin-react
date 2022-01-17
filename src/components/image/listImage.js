import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { AC_LIST_IMAGE } from '../actions/image';
import swal from 'sweetalert';
import { Redirect } from 'react-router-dom'
class listImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listImage:true,
            filename:''
        }
    }

    componentDidMount() {
        this.props.AC_LIST_IMAGE();
    }
    render() {
        var Image = this.props.imageReducer.imageList;
        console.log("=-=-=-table=", Image)
        var resultArray = [];
        if (Image == 0) {
            resultArray.push(<label>Data is Not Found</label>)
        }
        else {
            for (var i = 0; i < Image.length; i++) {
                resultArray.push(<tr key={i} >
                    <th scope="row">{i + 1}</th>
                    <td>{Image[i].filename}</td>
                </tr>
                )
            }
        }
        return (
            <>
                <div class="main-panel" >
                    <div class="content-wrapper" style={{ background: 'white' }} >
                        <div class="page-header">
                            <h3 class="page-title">
                                <span class="page-title-icon bg-gradient-primary text-white me-2">
                                    <i class="mdi mdi-home"></i>
                                </span> List Image
                            </h3>
                        </div>
                    </div>
                    <div class="table" style={{position:'relative', bottom:'230px'}}>
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col"> Filename</th>
                                </tr>
                            </thead>
                            <tbody>

                                {resultArray}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

function mapStateToProps(state) {
    console.log('map state image', state);
    return {
        imageReducer: state.IMAGE_Reducer
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ AC_LIST_IMAGE }, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(listImage);


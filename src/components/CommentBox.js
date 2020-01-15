import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions';
import requireAuth from 'components/requireAuth';


class CommentBox extends Component {

    state = {
        comment: ''
    }

    //Our component just  got rendered
   
    handleChange = (e) => {
        this.setState({
            comment: e.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault();
        //TODO - call and action Creater
        // Save the comment
        this.props.saveComment(this.state.comment)

        this.setState({
            comment: ''
        });

    }
  
    render() {
        console.log(this.props)
        return (
            <div>        
                <form onSubmit={this.handleSubmit} >
                    <h4>Add a Comment </h4>
                    <textarea value={this.state.comment} onChange={this.handleChange} />
                    <div>
                        <button> Submit Comment </button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchComments}> Fetch Comment </button>
            </div>
        )
    }
}

function mapStateToProps(state){
  return  { auth: state.auth}
}

export default connect(mapStateToProps, actions)(requireAuth(CommentBox));
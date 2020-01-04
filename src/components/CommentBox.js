
import React,{Component} from 'react';
import {connect} from 'react-redux';
import * as actions from 'actions'


class CommentBox extends Component {

    state = { comment: ''}

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

            this.setState({comment: ''});

    }

    render(){
       console.log(this.props)
        return (

            <form onSubmit={this.handleSubmit}>
                <h4>Add a Comment</h4>
                <textarea value={this.state.comment} onChange={this.handleChange} />
                <div>
                    <button>Submit Comment</button>
                </div>
            </form>
        )
    }
}

export default connect(null,actions)(CommentBox);
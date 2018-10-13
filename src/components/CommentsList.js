import React, {Component} from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen';

class CommentsList extends Component {
		static defaultProps = {
  			comments: []
		}
	

		getBodi = (isOpen, comments) => {
	
			if (isOpen)
				return null

		
			if (comments.lenght === 0)
				return <p>not yet</p>
			const listCom = comments.map((comment) => <li key={comment.id}><Comment comment={comment} /></li>)

			return(
				<ul>
					{listCom}
				</ul>)
			
		}



	render(){
		const {isOpen, toggleOpen, comments} = this.props;
		return <div>
					<button onClick = {toggleOpen}>{isOpen ? 'Hide commets' : 'Show commets'}</button>
					{this.getBodi( isOpen, comments)}
				</div> 

	}
}


export default toggleOpen(CommentsList)
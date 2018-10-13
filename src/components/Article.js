import React, {Component}  from 'react';
import PropTypes from 'prop-types';
import CommentsList from './CommentsList';
import toggleOpen from '../decorators/toggleOpen';

class Article extends Component {
	static propTypes = {
		article: PropTypes.shape({
			id: PropTypes.string.isRequired,
			title: PropTypes.string.isRequired,
			text: PropTypes.string
		})
	}



		getBody = (article, isOpen) => {
			if (isOpen) {
					return  <div>
							<p>{article.text}</p>
							<CommentsList comments = {article.comments} />
						</div>						
					}

		}


		

	render(){
		const {article, isOpen, toggleOpen} = this.props;
			return(
				<div>
					<h3>{article.title}</h3>
					<button onClick={toggleOpen}>{isOpen ? 'clouse' : 'open'}</button>
					<div>{this.getBody(article, isOpen)}</div>

				</div>
				)
			}
	}


export default toggleOpen(Article)
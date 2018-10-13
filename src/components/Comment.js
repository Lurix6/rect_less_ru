import React from 'react';
import PropTypes from 'prop-types';

function Comment({comment}) {

	return <div>{comment.text} <strong> by {comment.user} </strong></div>

	}

Comment.propTypes = {
	comment: PropTypes.shape({
		text: PropTypes.string.isRequered,
		user: PropTypes.string.isRequered
	}).isRequered
}

export default Comment
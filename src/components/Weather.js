import React from 'react';

const Weather = props => (
	<div>
		{ props.city && props.country && <p>Location: { props.city }, { props.country }</p> }
		{ props.temperature && <p>Temperature: { props.temperature } </p> }
		{ props.humadity && <p>Humadity: { props.humadity } </p> }
		{ props.description && <p>Description: { props.description } </p> }
		{ props.error && <p>Error: { props.error } </p> }
	</div>
)

export default Weather;
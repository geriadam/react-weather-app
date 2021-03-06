import React from 'react';

const Weather = props => (
	<div className="weather__info">
		{ 
			props.city && props.country && <p className="weather__key"> Location: 
				<span className="weather__value"> { props.city }, { props.country } </span>
			</p> 
		}
		{ 
			props.temperature && <p className="weather__key">Temperature: 
				<span className="weather__value"> { props.temperature } </span>
			</p> 
		}
		{ 
			props.humadity && <p className="weather__key">Humadity: 
				<span className="weather__value"> { props.humadity } </span>
			</p> 
			}
		{ 
			props.description && <p className="weather__key">Description: 
				<span className="weather__value"> { props.description } </span>
			</p> 
		}
		{ 
			props.error && <p className="weather__key">Error: 
				<span className="weather__error"> props.error } </span>
			</p> 
		}
	</div>
)

export default Weather;
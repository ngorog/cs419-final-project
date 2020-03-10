import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

function ChampionCard(props) {
	return (
		<Card as={Link} to={`/champion/${props.name}`}>
			<Image src={props.img} wrapped ui={false} />
			<Card.Content>
				<Card.Header>{props.name}</Card.Header>
				<Card.Meta>
					<span className='date'>{props.class}</span>
				</Card.Meta>
				<Card.Description>{props.desc}</Card.Description>
			</Card.Content>
		</Card>
	);
}

export default ChampionCard;

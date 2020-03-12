import React from "react";
import { Grid, Image } from "semantic-ui-react";

function getItem(props) {
	let jsx = [];
	let items = [];
	let i = 0;
	items.push(props.stats.item1);
	items.push(props.stats.item2);
	items.push(props.stats.item3);
	items.push(props.stats.item4);
	items.push(props.stats.item5);
	items.push(props.stats.item6);

	for (i = 0; i < 6; i++) {
		if (items[i] !== 0) {
			jsx.push(
				<Image
					id='item-img'
					src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${items[i]}.png`}
					rounded
					floated='left'
					centered
					size={props.size}
				/>
			);
		} else {
			jsx.push(
				<Image
					id='item-img'
					src={process.env.PUBLIC_URL + "/blankitem.png"}
					floated='left'
					size={props.size}
					centered
				/>
			);
		}
	}
	return jsx;
}

function ItemBar(props) {
	return (
		<Grid.Column id='user-item' textAlign='center' width={6}>
			{getItem(props)}
		</Grid.Column>
	);
}

export default ItemBar;

import React from "react";
import { Grid, Image } from "semantic-ui-react";

function ItemBar(props) {
	return (
		<Grid.Column id='user-item' textAlign='center' width={6}>
			{console.log(props.stats)}
			{props.stats.item0 !== 0 ? (
				<Image
					id='item-img'
					src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${props.stats.item0}.png`}
					rounded
					floated='left'
					centered
					size={props.size}
				/>
			) : (
				<Image
					id='item-img'
					src={process.env.PUBLIC_URL + "/blankitem.png"}
					floated='left'
					size={props.size}
					centered
				/>
			)}

			{props.stats.item1 !== 0 ? (
				<Image
					id='item-img'
					src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${props.stats.item1}.png`}
					rounded
					floated='left'
					size={props.size}
					centered
				/>
			) : (
				<Image
					id='item-img'
					src={process.env.PUBLIC_URL + "/blankitem.png"}
					floated='left'
					size={props.size}
					centered
				/>
			)}

			{props.stats.item2 !== 0 ? (
				<Image
					id='item-img'
					src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${props.stats.item2}.png`}
					rounded
					floated='left'
					size={props.size}
					centered
				/>
			) : (
				<Image
					id='item-img'
					src={process.env.PUBLIC_URL + "/blankitem.png"}
					floated='left'
					size={props.size}
					centered
				/>
			)}

			{props.stats.item3 !== 0 ? (
				<Image
					id='item-img'
					src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${props.stats.item3}.png`}
					rounded
					floated='left'
					size={props.size}
					centered
				/>
			) : (
				<Image
					id='item-img'
					src={process.env.PUBLIC_URL + "/blankitem.png"}
					floated='left'
					size={props.size}
					centered
				/>
			)}

			{props.stats.item4 !== 0 ? (
				<Image
					id='item-img'
					src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${props.stats.item4}.png`}
					rounded
					floated='left'
					size={props.size}
					centered
				/>
			) : (
				<Image
					id='item-img'
					src={process.env.PUBLIC_URL + "/blankitem.png"}
					floated='left'
					size={props.size}
					centered
				/>
			)}

			{props.stats.item5 !== 0 ? (
				<Image
					id='item-img'
					src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${props.stats.item5}.png`}
					rounded
					floated='left'
					size={props.size}
					centered
				/>
			) : (
				<Image
					id='item-img'
					src={process.env.PUBLIC_URL + "/blankitem.png"}
					floated='left'
					size={props.size}
					centered
				/>
			)}

			{props.stats.item6 !== 0 ? (
				<Image
					id='item-img'
					src={`http://ddragon.leagueoflegends.com/cdn/10.5.1/img/item/${props.stats.item6}.png`}
					rounded
					floated='left'
					size={props.size}
					centered
				/>
			) : (
				<Image
					id='item-img'
					src={process.env.PUBLIC_URL + "/blankitem.png"}
					floated='left'
					size={props.size}
					centered
				/>
			)}
		</Grid.Column>
	);
}

export default ItemBar;

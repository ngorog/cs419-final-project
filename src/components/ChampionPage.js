import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { Header, Card, Grid, Image } from "semantic-ui-react";

class ChampionPage extends React.Component {
	state = {};

	render() {
		return (
			<div>
				<Grid centered columns={1}>
					<Grid.Column>
						<Card.Group>
							<Card>
								<Image
									src='https://cdnb.artstation.com/p/assets/images/images/011/547/695/large/victor-maury-victormaury-aatroxforweb.jpg?1530132126'
									wrapped
									ui={false}
								/>
								<Card.Content>
									<Card.Header>Aatrox</Card.Header>
									<Card.Meta>
										<span className='date'>Fighter/Bruiser</span>
									</Card.Meta>
									<Card.Description>Aatrox broken champ.</Card.Description>
								</Card.Content>
							</Card>
							<Card>
								<Image
									src='https://3.bp.blogspot.com/-9QAzLmf8Zzc/Vw6QJL2T6eI/AAAAAAAA504/kI48flW3AT0ZGRZwNkQ_Kpl4LrXNVxoOQCLcB/s1600/Rammus_Splash_0.jpg'
									wrapped
									ui={false}
								/>
								<Card.Content>
									<Card.Header>Rammus</Card.Header>
									<Card.Meta>
										<span className='date'>Tank/Bruiser</span>
									</Card.Meta>
									<Card.Description>Rammus broken champ.</Card.Description>
								</Card.Content>
							</Card>
						</Card.Group>
					</Grid.Column>
				</Grid>
			</div>
		);
	}
}

export default ChampionPage;

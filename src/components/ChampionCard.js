import React from "react";
import { Link } from "react-router-dom";
import { Card, Image } from "semantic-ui-react";

function parseName(lname) {
  if (lname === "Wukong") {
    return "MonkeyKing";
  }
  let temp = "";
  var flag = 0;
  console.log(lname);
  var i = 0;
  for (i = 0; i < lname.length; i++) {
    if (
      (lname[i] >= "a" && lname[i] <= "z") ||
      (lname[i] >= "A" && lname[i] <= "Z")
    ) {
      if (flag === 1) {
        temp += lname[i].toLowerCase();
      } else {
        temp += lname[i];
      }
    } else if (lname[i] === "'") {
      flag = 1;
    }
  }

  return temp;
}

function ChampionCard(props) {
  return (
    <Card as={Link} to={`/champion/${parseName(props.name)}`}>
      <Image src={props.img} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.name}</Card.Header>
        <Card.Meta>
          <span className="date">{props.class}</span>
        </Card.Meta>
        <Card.Description>{props.desc}</Card.Description>
      </Card.Content>
    </Card>
  );
}

export default ChampionCard;

// Category.js

import { FaAppleAlt, FaCarrot, FaInfinity } from "react-icons/fa";
import { GiRoastChicken } from "react-icons/gi";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

function Category() {
  return (
    <List>
      <SLink
        to={
          "/includeIngredients/banana|apples|cranberry|lemon|pineapple|peaches|strawberry|blueberry"
        }
      >
        <FaAppleAlt />
        <h4>Fruits</h4>
      </SLink>
      <SLink
        to={
          "/includeIngredients/beef|chicken|fish|lamb|mutton|pork|prawn|crab|duck"
        }
      >
        <GiRoastChicken />
        <h4>Meats</h4>
      </SLink>
      <SLink
        to={
          "/includeIngredients/tomato|cucumber|cauliflower|lettuce|peas|cabbage|carrots|potatoes|mushrooms"
        }
      >
        <FaCarrot />
        <h4>Vegetables</h4>
      </SLink>
      <SLink
        to={
          "/includeIngredients/eggs|butter|milk|cereal|oats|flour|sugar|bakingPowder|hazelnuts|walnuts|chocolate|bread|rice|noodles|pasta|almonds|pepper|salt|mustard"
        }
      >
        <FaInfinity />
        <h4>Others</h4>
      </SLink>
    </List>
  );
}

const List = styled.div`
    display: flex;
    justify-content: center;
    margin 2rem 0rem;

`;

const SLink = styled(NavLink)`
  background-color: white; /* Green */
  border: 2px solid; /* Default border color */
  color: #662eed;
  padding: 30px 30px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 20px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 20px;
  margin-top:10rem;

  svg {
    color: #662eed;
    font-size: 1.5rem;
  }
  &.active {
    background: linear-graident(to right, #f27121, #e94057);
    svg {
      color: #662eed;
    }
    h4 {
      color: #662eed;
    }
  }
`;
export default Category;

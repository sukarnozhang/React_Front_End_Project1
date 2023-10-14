// Ingredients.js

import { useEffect, useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  let params = useParams();

  const getIngredients = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&includeIngredients=${name}&number=12`
    );
    const recipes = await data.json();
    setIngredients(recipes.results);
  };

  useEffect(() => {
    getIngredients(params.type);
    console.log(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {ingredients.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={"/recipe/" + item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
}

const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-grap: 3rem;
`;

const Card = styled.div`
  img {
    width: 150,
    height: 150,
    borderRadius: 150 / 2,
    overflow: "hidden",
    borderWidth: 3,

.image {
  flex-bassis: 40%
}

.text {
  font-size: 20px;
  padding-left: 20px;
}

  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 1rem;

  }
`;

export default Ingredients;

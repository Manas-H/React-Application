import styled from "styled-components";
import { categories } from "./ProductContents";
import Products from "./Products";

const Container = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <Products item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
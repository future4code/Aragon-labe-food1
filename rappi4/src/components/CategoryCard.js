import styled from "styled-components";

const Div = styled.div`
  margin: 2vw;
`;
export const CategoryCard = (props) => {
  return (
    <Div>
      <p>{props.category}</p>
    </Div>
  );
};

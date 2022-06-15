import { useState } from "react";
import styled from "styled-components";
import { CategoryCard } from "../../components/CategoryCard";
import { RestaurantCard } from "../../components/RestaurantCard";
import useForm from "../../hooks/useForm";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";

const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  position: relative;
  font-size: 1em;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export default function HomePage() {
  useProtectedPage();

  const [category, setcategory] = useState(null);

  const { form, onChange } = useForm({ query: "" });

  const [data] = useRequestData("rappi4A/restaurants", []);

  return (
    <div>
      <span>
        <input
          id={"query"}
          placeholder="Restaurante"
          name={"query"}
          value={form.query}
          onChange={onChange}
        />
      </span>
      <Div>
        {data.restaurants?.map((item) => {
          return (
            <div onClick={() => setcategory(item.category)}>
              <CategoryCard category={item.category} />
            </div>
          );
        })}
      </Div>
      <hr />
      {data.restaurants
        ?.filter((item) => {
          if (category === null) return item.id >= 1;
          else return item.category === category;
        })
        .filter((item) => {
          return item.name.toLowerCase().includes(form.query.toLowerCase());
        })
        .map((item) => {
          return <RestaurantCard restaurant={item} />;
        })}
    </div>
  );
}

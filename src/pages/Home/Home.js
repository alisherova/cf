import React from "react";
import { Card } from "../../components/Card";
import { SearchBar } from "../../components/SearchBar";
import { CardsContainer, SidebarContainer, Wrapper } from "./Home.styled";
import Filter from "../../components/Filter/Filter";
import { useCampaigns } from "../../api";
import LoaderComponent from "../../components/Loader/Loader";

const Home = () => {
  const { data, isLoading } = useCampaigns();

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <Wrapper>
      <SidebarContainer>
        <SearchBar />
        <Filter />
      </SidebarContainer>
      <CardsContainer>
        {data?.map(d => (
          <Card data={d} key={`${d._id}_card`} />
        ))}
      </CardsContainer>
    </Wrapper>
  );
};

export default Home;

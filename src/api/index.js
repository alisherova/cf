import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

export const getCampaigns = async () => {
  try {
    const allCampaigns = await instance.get("/campaigns");
    return allCampaigns.data.campaigns;
  } catch (err) {
    console.log(err);
  }
};

export const useCampaigns = () => {
  return useQuery(["campaigns"], () => getCampaigns());
};

export const getDetailedCampaign = async id => {
  try {
    const singleCampaign = await instance.get(`/campaigns/${id}`);
    return singleCampaign.data.campaign;
  } catch (err) {
    console.log(err);
  }
};

export const useDetailedCampaign = id => {
  return useQuery(["singleCampaign", id], () => getDetailedCampaign(id), {
    enabled: !!id
  });
};

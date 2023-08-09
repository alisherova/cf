import { useParams } from "react-router-dom";
import { useDetailedCampaign } from "../../api";
import ProgressBar from "../../components/ProgressBar";
import {
  Campaign,
  CampaignHeader,
  MainImage,
  CampaignDetails,
  Amount,
  TotalAmount,
  Strong,
  CampaignContent,
  CampaignTitle,
  Supporter,
  DaysLeft,
  Button,
  CampaignSummary,
  CampaignDescription
} from "./SingleCampaign.styled";
import { getLeftDate } from "../../utils";
import LoaderComponent from "../../components/Loader/Loader";

function SingleCampaign() {
  const { id } = useParams();
  const { data, isLoading } = useDetailedCampaign(id);

  if (isLoading) {
    return <LoaderComponent />;
  }

  return (
    <Campaign>
      <CampaignHeader>
        <MainImage src={data?.main_img_url} alt="title" />
        <CampaignDetails>
          <Amount>{data?.target_amount} so'mdan</Amount>
          <TotalAmount>
            <Strong>{data?.amount_raised}</Strong> so'm yig'ildi
          </TotalAmount>
          <ProgressBar
            width={{
              target_amount: data?.target_amount,
              amount_raised: data?.amount_raised
            }}
            height="8"
          />
          <Supporter>
            <b>{data?.contributors_count}</b> odam yordam berdi
          </Supporter>
          <DaysLeft>
            <b>{getLeftDate(data?.end_date)}</b> kun qoldi
          </DaysLeft>
          <Button>Qo'llab-quvvatlash</Button>
        </CampaignDetails>
      </CampaignHeader>
      <CampaignContent>
        <CampaignTitle>{data?.title}</CampaignTitle>
        <CampaignSummary>{data?.summary}</CampaignSummary>
        <CampaignDescription>{data?.description}</CampaignDescription>
      </CampaignContent>
    </Campaign>
  );
}

export default SingleCampaign;

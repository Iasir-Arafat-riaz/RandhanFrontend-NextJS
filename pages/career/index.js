import CareerHeader from "../../Components/Career/CareerHeader";
import BrandsServed from "../../Components/Home/BrandsServed/BrandsServed";
import Counter from "../../Components/Home/Counter";
import axios from "axios";
import Jobs from "../../Components/Career/Jobs";
import SeoForAll from "../../Components/ForSeo/SeoForAll";

const Career = ({ data }) => {
  console.log("hilu", data?.rows);
  return (
    <>
      <SeoForAll title="Career|Rondhan" />
      <CareerHeader />
      <Jobs allJobs={data?.rows} />

      <Counter />
      <BrandsServed />
    </>
  );
};
export default Career;

export async function getServerSideProps() {
  const config = {
    headers: {
      Authorization:
        "Basic Y29uY2F2ZWl0QGdtYWlsLmNvbTp2Ynp0OVEtbVpUN0stRzhmVG1tLXBLZXpw",
    },
  };
  const res = await axios(
    `http://rondhan-admin.vmsl.com.bd/sximoapi?module=vacancyannouncement`,
    config
  );
  return {
    props: {
      data: res?.data,
    },
  };
}

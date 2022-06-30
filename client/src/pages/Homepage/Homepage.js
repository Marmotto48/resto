import React from "react";
import "./Homepage.css";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import CardHP from "../../component/MUI/Card";
import { GiSmartphone } from "react-icons/gi";
import { AiFillLock, AiFillStar, AiOutlineSearch } from "react-icons/ai";
import { MdCampaign } from "react-icons/md";
import { GiSunglasses } from "react-icons/gi";
import PostCard from "../../component/MUI/postCard";
import QuotesCarousel from "./QuotesCarousel";
import LogoCarousel from "./LogoCarousel";
// import Footer from "../../component/Footer/Footer";

const Homepage = () => {
  const ColorButton = styled(Button)(() => ({
    color: "white",
    borderColor: "#82b1ff",
    "&:hover": {
      backgroundColor: "#82b1ff",
      borderColor: "#82b1ff",
    },
  }));
  const ColorButtonTwo = styled(Button)(() => ({
    color: "white",
    borderColor: "#9575cd",
    "&:hover": {
      backgroundColor: "#9575cd",
      borderColor: "#9575cd",
    },
  }));
  return (
    <div>
      <div className="bg-img">
        <div className="banner-content">
          <h1>Votre solution de marketing d'influence</h1>
          <p>
            {" "}
            Find the influencers you need, increase your awareness, optimize
            your campaigns and generate sales!
          </p>
          <Stack spacing={2} direction="row" justifyContent="center">
            <Button variant="contained" size="large">
              JOIN US
            </Button>
            <ColorButton variant="outlined">OUR SOLUTIONS</ColorButton>
          </Stack>
        </div>
      </div>
      <div className="section-1">
        <div className="section-1-content">
          <h1>Services we provide</h1>
          <p className="section-1-p">
            Lorem ipsum dolor sit amet, essent signiferumque eu duo, has te
            phaedrum posidonium mediocritatem. Dictas disputando id mei, brute
            ocurreret assentior et eos. Nonumy tibique reprimique eu sed, cu
            platonem definitionem mediocritatem vis, soleat bonorum deterruisset
            ex has. At per oratio sensibus suavitate, sea choro placerat no.
            Doming audiam id eam, vel altera detraxit delicatissimi ei. Nihil
            nobis oratio eum cu, te corrumpit theophrastus duo, te sea copiosae
            maluisset.
          </p>
        </div>
        <img
          src="images/vector_1.png"
          alt=""
          width="450px"
          height="450px"
          className="vector-1"
        />
      </div>
      <div className="section-2">
        <CardHP
          icon={<GiSmartphone style={{ fontSize: "50px" }} />}
          title={"Targeted and qualified influence"}
          subTitle={"adjective"}
          desc={
            "Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id."
          }
        />
        <CardHP
          icon={<AiFillLock style={{ fontSize: "50px" }} />}
          title={"Targeted and qualified influence"}
          subTitle={"adjective"}
          desc={
            "Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id."
          }
          className="card2"
        />
        <CardHP
          icon={<AiFillStar style={{ fontSize: "50px" }} />}
          title={"Targeted and qualified influence"}
          subTitle={"adjective"}
          desc={
            "Aenean sit amet leo vitae tellus vehicula tincidunt vel sed lorem. Nullam tincidunt commodo magna, id aliquam sapien sollicitudin id."
          }
        />
      </div>
      <div className="section-3">
        <h3>Take control of your influencer marketing</h3>
        <h1> Right now</h1>
        <ColorButtonTwo variant="outlined" size="large">
          OUR SOLUTIONS
        </ColorButtonTwo>
      </div>
      <div className="section-4">
        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <h3>Findly Automated</h3>
                <p style={{ width: "50%", margin: "auto" }}>
                  Launch your influencer campaign in just 4 steps!
                </p>
                <MdCampaign className="fa" />
              </div>
            </div>
          </div>

          <div className="slide slide2">
            <div className="content">
              <h3>Findly Automated</h3>
              <p>
                Launch your influencer campaign in just 4 steps! You publish an
                ad on the Findly platform and influencers apply there. You just
                have to validate the influencers who you like the most! It's as
                simple as that. From 49 € / month.
              </p>
              <Button size="medium" variant="outlined" sx={{ mt: 3.5 }}>
                SEE MORE
              </Button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <h3>Findly Search & Track</h3>
                <p style={{ width: "50%", margin: "auto" }}>
                  Take control of your influencer marketing.
                </p>
                <AiOutlineSearch className="fa" />
              </div>
            </div>
          </div>

          <div className="slide slide2">
            <div className="content">
              <h3>Findly Search & Track</h3>
              <p>
                Research and get statistics on over 200,000 influencers. Contact
                them easily to offer them partnerships. Get all their content
                (Posts, Stories,…) in a snap!
                <br /> From 149 € / month
              </p>
              <Button size="medium" variant="outlined" sx={{ mt: 3.5 }}>
                SEE MORE
              </Button>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="slide slide1">
            <div className="content">
              <div className="icon">
                <h3>Findly Agency</h3>
                <p style={{ width: "50%", margin: "auto" }}>
                  The expert influencer marketing agency
                </p>
                <GiSunglasses className="fa" />
              </div>
            </div>
          </div>

          <div className="slide slide2">
            <div className="content">
              <h3>Findly Agency</h3>
              <p>
                Launch your influencer campaign in just 4 steps! You publish an
                ad on the Findly platform and influencers apply there. You just
                have to validate the influencers who you like the most! It's as
                simple as that. From 49 € / month.
              </p>
              <Button size="medium" variant="outlined" sx={{ mt: 3.5 }}>
                SEE MORE
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-5">
        <div className="testimonials-section">
          <QuotesCarousel />
        </div>
      </div>
      <div className="section-6">
        {[...Array(3)].map((v, i) => (
          <PostCard key={`selector-${i}`} />
        ))}
        {/* <PostCard /> */}
      </div>
      <LogoCarousel />
      <Footer />
    </div>
  );
};
export default Homepage;

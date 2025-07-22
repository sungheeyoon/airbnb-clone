import Head from "next/head";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LargeCard from "../components/LargeCard";
import MediumCard from "../components/MediumCard";
import SmallCard from "../components/SmallCard";

export default function Home({ exploreData, cardsData }) {
  return (
    <div className="">
      <Head>
        <title>Yoon Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(({ img, distance, location }) => (
              <SmallCard
                key={img}
                img={img}
                distance={distance}
                location={location}
              />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {cardsData?.map(({ img, title }) => (
              <MediumCard key={img} img={img} title={title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export const getStaticProps = async () => {
  // Local image data - 아래 파일명에 해당하는 이미지를 폴더에 넣어주세요
  const exploreData = [
    {
      img: "/images/explore/london.jpg",
      location: "London",
      distance: "45-minute drive",
    },
    {
      img: "/images/explore/manchester.jpg",
      location: "Manchester",
      distance: "4.5-hour drive",
    },
    {
      img: "/images/explore/liverpool.jpg",
      location: "Liverpool",
      distance: "4.5-hour drive",
    },
    {
      img: "/images/explore/york.jpg",
      location: "York",
      distance: "4-hour drive",
    }
  ];

  const cardsData = [
    {
      img: "https://links.papareact.com/2io",
      title: "Outdoor getaways"
    },
    {
      img: "https://links.papareact.com/q7j",
      title: "Unique stays"
    },
    {
      img: "https://links.papareact.com/s03",
      title: "Entire homes"
    },
    {
      img: "https://links.papareact.com/8ix",
      title: "Pet allowed"
    }
  ];
  // json object image,location,distance etc..
  return {
    props: {
      exploreData,
      cardsData,
    },
  };
};

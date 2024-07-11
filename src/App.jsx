import { 
  Hero, 
  PopularProducts, 
  SuperQuality, 
  Services, 
  SpecialOffers, 
  CustomerReviews, 
  Suscribe, 
  Footer 
} from "./sections";
import NavBar from "./components/NavBar";

const App = () => (
  <main>
    <NavBar />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffers />
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>
    <section className="padding-x sm:py32 py-16 w-full">
      <Suscribe />
    </section>
    <section className="bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
)

export default App
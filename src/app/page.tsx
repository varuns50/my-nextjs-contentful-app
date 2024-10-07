import Header from '../components/Header';
import Footer from '../components/Footer';
import OurServices from '../components/OurServices';

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <main className="p-4">
        <h1 className="text-4xl font-bold text-center mb-6">Welcome to MyWebsite</h1>
        <OurServices />
      </main>
      <Footer />
    </div>
  );
};

export default Home;

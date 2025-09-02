
import Header from '../components/Header';
import SuccessSection from '../components/SuccessSection';
import CaseStudies from '../components/CaseStudies';

const CaseStudiesPage = () => {
  return (
    <div className="min-h-screen bg-white text-black font-inter">
      <Header />
      <div className="pt-20">
        <SuccessSection />
        <CaseStudies />
      </div>
    </div>
  );
};

export default CaseStudiesPage;

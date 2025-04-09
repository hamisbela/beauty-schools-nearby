import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Users, TrendingUp, Award, GraduationCap, BookOpen, MapPin, Phone } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Beauty Schools Near You | Our Mission & Services</title>
        <meta name="description" content="Learn about BeautySchoolNearby.com, the premier resource for finding accredited cosmetology schools, esthetician programs, and makeup academies in your local area." />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900">About BeautySchoolNearby.com</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Your comprehensive resource for finding quality beauty schools, cosmetology programs, and esthetician training in your local area
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Mission</h2>
            <p className="text-gray-700 mb-6">
              At BeautySchoolNearby.com, our mission is to connect individuals seeking quality beauty education with accredited cosmetology schools and training programs in their local area. We believe everyone deserves access to excellent education that can launch their career in the beauty industry.
            </p>
            <p className="text-gray-700">
              We've created the most comprehensive online directory of beauty education providers, making it easy to find the right school or program near you. Our platform allows you to browse listings by location, read detailed school profiles, and make informed decisions about your beauty education journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-purple-800 mb-4">For Students</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Find accredited beauty schools and programs in your local area</span>
                </li>
                <li className="flex items-start">
                  <BookOpen className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Access detailed program information, tuition costs, and financial aid options</span>
                </li>
                <li className="flex items-start">
                  <MapPin className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Browse by location to find convenient schools near you</span>
                </li>
                <li className="flex items-start">
                  <Phone className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Connect directly with beauty education providers</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-lg">
              <h2 className="text-xl font-bold text-purple-800 mb-4">For Schools</h2>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Search className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Increase your online visibility to potential students</span>
                </li>
                <li className="flex items-start">
                  <Users className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Showcase your programs, facilities, and educational offerings</span>
                </li>
                <li className="flex items-start">
                  <TrendingUp className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Grow your student enrollment with targeted exposure</span>
                </li>
                <li className="flex items-start">
                  <Award className="text-purple-600 mt-1 mr-3" size={20} />
                  <span>Highlight your accreditation and industry recognition</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Why Beauty Education Matters</h2>
            <p className="text-gray-700 mb-4">
              Quality beauty education is more than just learning techniques—it's the foundation for a successful career in the beauty industry. Professional beauty schools offer comprehensive training, industry certification, and career development that prepare students for long-term success.
            </p>
            <p className="text-gray-700 mb-4">
              Accredited beauty schools provide structured curricula that cover both technical skills and business knowledge, ensuring graduates are fully prepared for professional practice. They offer hands-on training, exposure to industry professionals, and valuable networking opportunities.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Accredited Beauty Schools</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <GraduationCap className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Industry-recognized certification</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Comprehensive curriculum</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Financial aid eligibility</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="text-purple-500 mt-1 mr-2" size={16} />
                    <span>Career placement services</span>
                  </li>
                </ul>
              </div>
              <div className="border border-gray-200 rounded-lg p-4">
                <h3 className="font-bold text-lg mb-2">Self-Taught Approaches</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <GraduationCap className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>No industry certification</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Limited professional recognition</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>Restricted career opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="text-gray-500 mt-1 mr-2" size={16} />
                    <span>No guided practical experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-lg mb-12">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Our Story</h2>
            <p className="text-gray-700 mb-4">
              BeautySchoolNearby.com was founded by a team of digital marketing specialists with deep connections to the beauty education industry who recognized the need for a specialized platform connecting beauty schools with prospective students.
            </p>
            <p className="text-gray-700 mb-4">
              After speaking with both beauty educators and students, we discovered a gap in the market for a dedicated, comprehensive resource focused specifically on beauty education. Many quality institutions were difficult to find online, and students struggled to identify which schools offered the specific programs or specializations they were interested in pursuing.
            </p>
            <p className="text-gray-700">
              Today, BeautySchoolNearby.com is the premier online resource for beauty education providers across the United States. We continue to expand our listings and improve our platform to better serve both schools and their prospective students.
            </p>
          </div>
          
          <div className="bg-purple-900 text-white p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Join Our Directory</h2>
            <p className="text-lg mb-6">
              Are you a beauty school or cosmetology program administrator? Add your institution to our directory and connect with potential students in your area today.
            </p>
            <a href="/add-a-listing/" className="inline-block bg-white text-purple-900 px-6 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl">
              Add Your Listing
            </a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AboutPage;
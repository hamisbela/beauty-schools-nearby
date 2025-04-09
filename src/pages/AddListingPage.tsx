import React from 'react';
import { Helmet } from 'react-helmet';
import { Search, Users, TrendingUp, Upload, Check, Award, BookOpen } from 'lucide-react';

const AddListingPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Add Your Beauty School | List Your Programs in Our Directory</title>
        <meta name="description" content="Add your beauty school or cosmetology program to our directory. Reach prospective students looking for beauty education in your area." />
      </Helmet>

      <main className="container mx-auto px-4 py-12">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-purple-900">Add Your School Listing</h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Join our directory of accredited beauty schools and cosmetology programs and connect with potential students searching for "beauty schools near me"
          </p>
        </header>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <form>
              <h2 className="text-2xl font-bold text-purple-800 mb-6">School Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <label htmlFor="school_name" className="block text-gray-700 font-medium mb-2">School Name*</label>
                  <input 
                    type="text" 
                    id="school_name"
                    placeholder="Your Beauty School Name"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="school_category" className="block text-gray-700 font-medium mb-2">Primary Category*</label>
                  <select 
                    id="school_category"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a Category</option>
                    <option value="cosmetology_school">Cosmetology School</option>
                    <option value="esthetician_program">Esthetician Program</option>
                    <option value="makeup_academy">Makeup Academy</option>
                    <option value="nail_technology">Nail Technology School</option>
                    <option value="barber_school">Barber School</option>
                    <option value="beauty_college">Beauty College</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number*</label>
                  <input 
                    type="tel" 
                    id="phone"
                    placeholder="(123) 456-7890"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address*</label>
                  <input 
                    type="email" 
                    id="email"
                    placeholder="admissions@yourschool.com"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="website" className="block text-gray-700 font-medium mb-2">Website</label>
                  <input 
                    type="url" 
                    id="website"
                    placeholder="https://yourschool.com"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="hours" className="block text-gray-700 font-medium mb-2">Office Hours</label>
                  <input 
                    type="text" 
                    id="hours"
                    placeholder="Mon-Fri: 9am-5pm, Sat: 10am-2pm"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-purple-800 mb-6">Location Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div className="md:col-span-2">
                  <label htmlFor="address" className="block text-gray-700 font-medium mb-2">Street Address*</label>
                  <input 
                    type="text" 
                    id="address"
                    placeholder="123 Main Street"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="city" className="block text-gray-700 font-medium mb-2">City*</label>
                  <input 
                    type="text" 
                    id="city"
                    placeholder="City"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                
                <div>
                  <label htmlFor="state" className="block text-gray-700 font-medium mb-2">State*</label>
                  <select 
                    id="state"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">Select a State</option>
                    <option value="AL">Alabama</option>
                    <option value="AK">Alaska</option>
                    <option value="AZ">Arizona</option>
                    <option value="AR">Arkansas</option>
                    <option value="CA">California</option>
                    <option value="CO">Colorado</option>
                    <option value="CT">Connecticut</option>
                    <option value="DE">Delaware</option>
                    <option value="FL">Florida</option>
                    <option value="GA">Georgia</option>
                    <option value="HI">Hawaii</option>
                    <option value="ID">Idaho</option>
                    <option value="IL">Illinois</option>
                    <option value="IN">Indiana</option>
                    <option value="IA">Iowa</option>
                    <option value="KS">Kansas</option>
                    <option value="KY">Kentucky</option>
                    <option value="LA">Louisiana</option>
                    <option value="ME">Maine</option>
                    <option value="MD">Maryland</option>
                    <option value="MA">Massachusetts</option>
                    <option value="MI">Michigan</option>
                    <option value="MN">Minnesota</option>
                    <option value="MS">Mississippi</option>
                    <option value="MO">Missouri</option>
                    <option value="MT">Montana</option>
                    <option value="NE">Nebraska</option>
                    <option value="NV">Nevada</option>
                    <option value="NH">New Hampshire</option>
                    <option value="NJ">New Jersey</option>
                    <option value="NM">New Mexico</option>
                    <option value="NY">New York</option>
                    <option value="NC">North Carolina</option>
                    <option value="ND">North Dakota</option>
                    <option value="OH">Ohio</option>
                    <option value="OK">Oklahoma</option>
                    <option value="OR">Oregon</option>
                    <option value="PA">Pennsylvania</option>
                    <option value="RI">Rhode Island</option>
                    <option value="SC">South Carolina</option>
                    <option value="SD">South Dakota</option>
                    <option value="TN">Tennessee</option>
                    <option value="TX">Texas</option>
                    <option value="UT">Utah</option>
                    <option value="VT">Vermont</option>
                    <option value="VA">Virginia</option>
                    <option value="WA">Washington</option>
                    <option value="WV">West Virginia</option>
                    <option value="WI">Wisconsin</option>
                    <option value="WY">Wyoming</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="zip" className="block text-gray-700 font-medium mb-2">ZIP Code*</label>
                  <input 
                    type="text" 
                    id="zip"
                    placeholder="12345"
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
              </div>
              
              <h2 className="text-2xl font-bold text-purple-800 mb-6">School & Program Details</h2>
              
              <div className="mb-8">
                <label htmlFor="description" className="block text-gray-700 font-medium mb-2">School Description*</label>
                <textarea 
                  id="description"
                  rows={5}
                  placeholder="Describe your school, educational philosophy, facilities, and unique offerings..."
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              
              <div className="mb-8">
                <label htmlFor="programs" className="block text-gray-700 font-medium mb-2">Programs Offered*</label>
                <textarea 
                  id="programs"
                  rows={3}
                  placeholder="List your beauty education programs, specializations, and certifications..."
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-3">Program Categories (Select all that apply)</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Cosmetology
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Esthetics
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Makeup Artistry
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Nail Technology
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Hair Styling
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Barbering
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Massage Therapy
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Continuing Education
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Instructor Training
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Salon Management
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Spa Services
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Special Effects Makeup
                  </label>
                </div>
              </div>
              
              <div className="mb-8">
                <h3 className="font-bold text-gray-800 mb-3">Accreditation & Credentials</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    NACCAS
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    COE
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    ACCSC
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    State Board Approved
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    Title IV Eligible
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="mr-2 h-4 w-4 text-purple-600" />
                    VA Approved
                  </label>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="block text-gray-700 font-medium mb-2">Upload School Images (Max 5)</label>
                <div className="border-2 border-dashed border-gray-300 p-6 rounded-lg text-center">
                  <input 
                    type="file" 
                    id="images" 
                    accept="image/*"
                    multiple
                    className="hidden"
                  />
                  <label htmlFor="images" className="block cursor-pointer">
                    <Upload className="mx-auto text-purple-500 mb-3" size={48} />
                    <p className="text-gray-700">Drag and drop files here or click to browse</p>
                    <p className="text-gray-500 text-sm mt-1">JPG, PNG, or GIF (Max 5MB each)</p>
                  </label>
                </div>
              </div>
              
              <div className="mb-8">
                <label className="flex items-start">
                  <input type="checkbox" className="mt-1 mr-3 h-4 w-4 text-purple-600" required />
                  <span>
                    I confirm that I am authorized to submit this information and that it is accurate. I agree to the 
                    <a href="#" className="text-purple-600 hover:text-purple-800 mx-1">Terms of Service</a> and 
                    <a href="#" className="text-purple-600 hover:text-purple-800 mx-1">Privacy Policy</a>.
                  </span>
                </label>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-purple-600 text-white px-8 py-3 rounded-lg font-bold text-lg hover:bg-purple-700 transition-colors"
                >
                  Submit Listing
                </button>
              </div>
            </form>
          </div>
          
          <div className="mt-12 bg-purple-50 p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-purple-800 mb-4">Why List With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-4">
                  <Search size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Increased Visibility</h3>
                <p className="text-gray-700">Gain exposure to potential students actively searching for beauty schools near them.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-4">
                  <Users size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Targeted Audience</h3>
                <p className="text-gray-700">Connect with students specifically looking for beauty education in their area.</p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="bg-purple-100 p-4 rounded-full text-purple-600 mb-4">
                  <TrendingUp size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Enrollment Growth</h3>
                <p className="text-gray-700">Expand your student base and increase program enrollments from your local area.</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default AddListingPage;
import React, { useState } from 'react';
import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'; // Country and region selector
import './Onboarding.scss';

// Validation schema
const validationSchema = Yup.object({
  birthday: Yup.date().required('Birthday is required'),
  address:  Yup.string().required('Address is required'),
  city: Yup.string().required('City is required'),
  postalCode: Yup.string().required('Postal code is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  gender: Yup.string().required('Gender is required'),
  marketPref: Yup.boolean(),
});

const Onboarding = ({  }) => {
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [postalCodes, setPostalCodes] = useState([]);

 


    const allowedCountries = [
        'NG', 'US', 'CA', 'GB', 'FR', 'BJ', 'BF', 'CI', 'CM', 'GA', 'GH', 'GN', 'GW', 'LR', 'ML', 'MR', 'NE',  'SN', 'SL','TG', 
        ];

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitting(true);
 

    try {
      const response = await axios.put(`http://localhost:8000/api/users/${userId}`, values);
      console.log('User info updated successfully:', response.data);
      alert('Your information has been updated successfully.');
      resetForm();
    } catch (error) {
      console.error('Error updating user info:', error);
      alert('Failed to update information. Please try again later.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleCountryChange = (val, setFieldValue) => {
    setSelectedCountry(val);
    setSelectedState(''); 
    setPostalCodes([]); 
    setFieldValue('country', val);
    setFieldValue('state', ''); 
    setFieldValue('postalCode', ''); 
  };

  const handleStateChange = (val, setFieldValue) => {
    setSelectedState(val);
    setFieldValue('state', val);

  
  };

  return (
    <div className="user-info-form">
      <h2>Complete Your Profile</h2>
      <Formik
        initialValues={{
          address: '',
          birthday: '',
          city: '',
          postalCode: '',
          country: '',
          state: '',
          gender: '',
          marketPref: false,
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, values, setFieldValue }) => (
          <Form className="form">
          
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <CountryDropdown
                name="country"
                value={selectedCountry}
                onChange={(val) => handleCountryChange(val, setFieldValue)}
                priorityOptions={allowedCountries} // Filtered countries list
              />
              <ErrorMessage name="country" component="div" className="error" />
            </div>

            {selectedCountry && (
              <div className="form-group">
                <label htmlFor="state">State</label>
                <RegionDropdown
                  name="state"
                  country={selectedCountry}
                  value={selectedState}
                  onChange={(val) => handleStateChange(val, setFieldValue)}
                />
                <ErrorMessage name="state" component="div" className="error" />
              </div>
            )}

           
            <div className="form-group">
              <label htmlFor="city">City</label>
              <Field name="city" type="text" />
              <ErrorMessage name="city" component="div" className="error" />
            </div>

           
            <div className="form-group">
              <label htmlFor="postalCode">Postal Code</label>
              <Field name="postalCode" type="text" />
              <ErrorMessage name="postalCode" component="div" className="error" />
            </div>

           
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <Field name="address" type="text" />
              <ErrorMessage name="address" component="div" className="error" />
            </div>

       
            <div className="form-group">
              <label>Gender</label>
              <div className="gender-options">
                {['Male', 'Female', 'Others', 'Prefer not to say'].map((option) => (
                  <div
                    key={option}
                    className={`gender-option ${values.gender === option ? 'selected' : ''}`}
                    onClick={() => setFieldValue('gender', option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
              <ErrorMessage name="gender" component="div" className="error" />
            </div>

      
            <div className="form-group market-pref">
              <label htmlFor="marketPref">
                <Field name="marketPref" type="checkbox" />
                I’d like to receive emails on jewelry care and updates
              </label>
            </div>

            <button className='submit' type="submit" disabled={isSubmitting} >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Onboarding;

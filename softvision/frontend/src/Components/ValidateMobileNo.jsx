import React, { useState } from 'react'
import "./css/ValidateMobileNo.css"

export default function ValidateMobileNo() {
      const [mobileNumber, setMobileNumber] = useState('');
      const [isValid, setIsValid] = useState(true);
    
      const validateMobileNumber = (input) => {
        const mobileNumberPattern = /^[6-9]\d{9}$/;
    
        if (mobileNumberPattern.test(input)) {
          setIsValid(true);
        } else {
          setIsValid(false);
        }
      };
    
      const handleMobileNumberChange = (e) => {
        const input = e.target.value;
        setMobileNumber(input);
        validateMobileNumber(input);
      };
    
      return (
        <div className='mobile-number-validator'>
          <label>Enter Mobile Number:</label>
          <input
            type="text"
            value={mobileNumber}
            onChange={handleMobileNumberChange}
            placeholder="Enter a 10-digit mobile number"
          />
          {!isValid && <p style={{ color: 'red' }}>Invalid mobile number. Please enter a valid 10-digit number.</p>}
        </div>
      );
    };
    
    
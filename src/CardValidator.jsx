// src/components/CreditCardValidator.js
import { useState } from 'react';
import styled from 'styled-components';

const CardValidatorContainer = styled.div`
  width: 400px;
  background-image: linear-gradient(
    to right top,
    #280537,
    #56034c,
    #890058,
    #bc005b,
    #eb1254
  );
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: #fff;

  @media (max-width: 650px) {
    width: 70%;
  }
`;

const CardType = styled.div`
  font-size: 24px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  margin-top: 20px;
  gap: 1rem;
`;

const Input = styled.input`
  width: 20%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const SelectContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Select = styled.select`
  width: 45%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

const CreditCardValidator = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryMonth, setExpiryMonth] = useState('01');
  const [expiryYear, setExpiryYear] = useState('23');
//   const [cvv, setCVV] = useState('');
//   const [cardType, setCardType] = useState('');

  const handleCardNumberChange = (e) => {
    const inputCardNumber = e.target.value.replace(/\s/g, ''); // Remove spaces
    setCardNumber(inputCardNumber);
    // setCardType(detectCardType(inputCardNumber));
  };

//   const detectCardType = (number) => {
//     // Implement a function to detect card type based on the first 6 digits
//     // Example implementation:
//     if (/^4/.test(number)) {
//       return 'Visa';
//     } else if (/^5[1-5]/.test(number)) {
//       return 'MasterCard';
//     } else if (/^3[47]/.test(number)) {
//       return 'American Express';
//     } else if (/^6(?:011|5)/.test(number)) {
//       return 'Discover';
//     } else if (/^3(?:0[0-5]|[68])/.test(number)) {
//       return 'Diners Club';
//     } else {
//       return '';
//     }
//   };

  const handleExpiryMonthChange = (e) => {
    setExpiryMonth(e.target.value);
  };

  const handleExpiryYearChange = (e) => {
    setExpiryYear(e.target.value);
  };

//   const handleCVVChange = (e) => {
//     setCVV(e.target.value);
//   };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
      }}
    >
      <CardValidatorContainer>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <img src="https://i.imgur.com/gfp4wrR.png" width="50" />
          <CardType>VISA</CardType>
          {/* <CardType>{cardType}</CardType> */}
        </div>
        <h2>Card Number</h2>
        <InputContainer>
          <Input
            type="text"
            placeholder="XXXX"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="4"
          />
          <Input
            type="text"
            placeholder="XXXX"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="4"
          />
          <Input
            type="text"
            placeholder="XXXX"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="4"
          />
          <Input
            type="text"
            placeholder="XXXX"
            value={cardNumber}
            onChange={handleCardNumberChange}
            maxLength="4"
          />
        </InputContainer>
        <h2>Expiry Date</h2>
        <SelectContainer>
          <Select value={expiryMonth} onChange={handleExpiryMonthChange}>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
              <option key={month}>{month < 10 ? `0${month}` : month}</option>
            ))}
          </Select>
          <Select value={expiryYear} onChange={handleExpiryYearChange}>
            {Array.from({ length: 28 }, (_, i) => i + 23).map((year) => (
              <option key={year}>{year}</option>
            ))}
          </Select>
        </SelectContainer>
        {/* <h2>CVV</h2>
        <Input
          type="password"
          placeholder="CVV"
          value={cvv}
          onChange={handleCVVChange}
          maxLength="3"
        /> */}
      </CardValidatorContainer>
    </div>
  );
};

export default CreditCardValidator;

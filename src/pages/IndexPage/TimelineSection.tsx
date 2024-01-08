import React, { useState } from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import { TimelineTable } from 'src/components/Table';
import Image from 'next/image';
import churchmap from 'public/churchmap.png';
import winerymap from 'public/winerymap.png';

const TimelineSection = () => {
  const destinationAddress = '3115+SW+59th+St,+Oklahoma+City,+OK+73159';
  const googleMapsLink = `https://www.google.com/maps/place/${destinationAddress}`;
  const destinationAddressWinery = '6000+W+Waterloo+Rd,+Edmond,+OK+73025';
  const googleMapsLinkWinery = `https://www.google.com/maps/place/${destinationAddressWinery}`;

  const mapImageStyle = {
    borderRadius: '8px', // Adjust the value as needed for rounded corners
    maxWidth: '500px',   // Adjust the value as needed for the maximum width
    height: '170px',      // Maintain aspect ratio
  };

  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  const handleMouseEnter1 = () => {
    setIsHovered1(true);
  };

  const handleMouseLeave1 = () => {
    setIsHovered1(false);
  };

  const imageContainerStyle1 = {
    maxWidth: '500px',
    position: 'relative',
    height: '170px',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    transform: isHovered1 ? 'scale(0.98)' : 'scale(1)',
    boxShadow: isHovered1 ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
  };

  const handleMouseEnter2 = () => {
    setIsHovered2(true);
  };

  const handleMouseLeave2 = () => {
    setIsHovered2(false);
  };

  const imageContainerStyle2 = {
    maxWidth: '500px',
    position: 'relative',
    height: '170px',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.3s, box-shadow 0.3s',
    transform: isHovered2 ? 'scale(0.98)' : 'scale(1)',
    boxShadow: isHovered2 ? '0 0 10px rgba(0, 0, 0, 0.5)' : 'none',
  };
  return (
    <Section backgroundColor={COLORS.highlight2} title="Schedule for the day">
      <TimelineTable>
        <tbody>
          <tr>
            <td>9:00 AM</td>
            <td>
              <strong>Traditional Engagement</strong>
              <ul>
                <li>Bing family will come to Anh family&apos;s house.</li>
                <li>
                  This event is reserved for family and relative only due to
                  limited space.
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>2:00 PM</td>
            <td>
              <strong>Church ceremony</strong>
              <ul>
                <li>
                  We would like to extend an invitation for everyone to join us
                  at the church to witness and celebrate as we sign the marriage
                  documents.
                </li>
              </ul>
              <div style={{ marginBottom: 10, marginTop: 10 }}>
                <span style={{ fontSize: '0.7rem' }}>
                  <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
                    Click for direction to Saint Andrew Dung-Lac Catholic Church
                  </a>
                </span>
                <br />

              </div>
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter1}
                onMouseLeave={handleMouseLeave1}
              >
                <div style={imageContainerStyle1 as any}>
                  <Image src={churchmap} alt="Static Map" style={mapImageStyle} className="map-image" />
                </div>
              </a>
            </td>
          </tr>
          <tr>
            <td>5:00 PM</td>
            <td>
              <strong>Wedding Celebration</strong>
              <ul>
                <li>Happy hour to take photo and small snack.</li>
                <li>Enjoy our favorite bbq, wines, cocktail slushs.</li>
                <li>Karaoke station.</li>
              </ul>
              <div style={{ marginBottom: 10, marginTop: 10 }}>
                <span style={{ fontSize: '0.7rem', color: 'blue' }}>
                  <a href={googleMapsLinkWinery} target="_blank" rel="noopener noreferrer">
                    Click for direction to Clauren Ridge Vineyard and Winery
                  </a>
                </span>
                <br />
              </div>
              <a
                href={googleMapsLinkWinery}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={handleMouseEnter2}
                onMouseLeave={handleMouseLeave2}
              >
                <div style={imageContainerStyle2 as any}>
                  <Image src={winerymap} alt="Static Map" style={mapImageStyle} className="map-image" />
                </div>
              </a>


            </td>
          </tr>
        </tbody>
      </TimelineTable>
    </Section>
  );
};

export default TimelineSection;

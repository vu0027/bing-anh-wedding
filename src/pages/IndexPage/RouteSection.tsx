import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import churchmap from 'public/churchmap.png';
import winerymap from 'public/winerymap.png';
import Image from 'next/image';

const RouteSection = () => {
  const destinationAddress = '3115+SW+59th+St,+Oklahoma+City,+OK+73159';
  const googleMapsLink = `https://www.google.com/maps/place/${destinationAddress}`;
  const destinationAddressWinery = '6000+W+Waterloo+Rd,+Edmond,+OK+73025';
  const googleMapsLinkWinery = `https://www.google.com/maps/place/${destinationAddressWinery}`;

  return (
    <Section backgroundColor={COLORS.highlight1} title="Directions">
      <div style={{ marginBottom: 22 }}>
        <span style={{ fontSize: '1.2rem' }}>
          Saint Andrew Dung-Lac Catholic Church
        </span>
        <br />
        <span style={{ fontSize: '0.9rem' }}>
          3115 SW 59th St, Oklahoma City, OK 73159
        </span>
      </div>
      <a href={googleMapsLink} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          <Image src={churchmap} alt="Static Map" className="map-image" />
        </div>
      </a>

      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          height: 170px;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .image-container:hover {
          transform: scale(0.98);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adjust shadow as needed */
        }

        .map-image {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
      `}</style>
      <div style={{ marginBottom: 20, marginTop: 40 }}>
        <span style={{ fontSize: '1.2rem' }}>
          Clauren Ridge Vineyard and Winery
        </span>
        <br />
        <span style={{ fontSize: '0.9rem' }}>
          6000 W Waterloo Rd, Edmond, OK 73025
        </span>
      </div>
      <a href={googleMapsLinkWinery} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          <Image src={winerymap} alt="Static Map" className="map-image" />
        </div>
      </a>

      <style jsx>{`
        .image-container {
          position: relative;
          width: 100%;
          height: 170px;
          border-radius: 8px;
          overflow: hidden;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .image-container:hover {
          transform: scale(0.98);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Adjust shadow as needed */
        }

        .map-image {
          width: 100%;
          height: 100%;
          border-radius: 8px;
        }
      `}</style>
    </Section>
  );
};

export default RouteSection;

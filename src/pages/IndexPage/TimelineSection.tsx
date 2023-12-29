import React from 'react';
import { COLORS } from 'src/assets/theme';
import Section from 'src/components/Section';
import { TimelineTable } from 'src/components/Table';

const TimelineSection = () => {
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
            </td>
          </tr>
        </tbody>
      </TimelineTable>
    </Section>
  );
};

export default TimelineSection;

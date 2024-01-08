import styled from '@emotion/styled';
import React from 'react';
import { COLORS } from 'src/assets/theme';

const Collapsible = ({
  title,
  contents,
}: {
  title: string;
  contents: React.ReactNode;
}) => {
  const [collapsed, setCollapsed] = React.useState(true);

  return (
    <Container>
      <TitleContainer onClick={() => setCollapsed(prev => !prev)}>
        {title}
      </TitleContainer>
      {!collapsed && <Contents>{contents}</Contents>}
    </Container>
  );
};

const Container = styled.div`
  background: ${COLORS.highlight3};
  border-radius: 6px;
  margin-bottom: 12px;
  padding: 10px 13px;
  border: 1px solid #fff;
  cursor: pointer;

  &:hover {
    border-color: grey;
  }
`;

const TitleContainer = styled.div`
  cursor: pointer;
`;

const Contents = styled.div`
  border-top: 1px solid grey;
  margin-top: 10px;
  padding-top: 10px;
`;

export default Collapsible;

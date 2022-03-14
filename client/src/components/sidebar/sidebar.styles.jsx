import styled from 'styled-components';

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: fit-content;
  margin-top: 130px; // TODO: improve
  border-left: 1px solid #7a7a7a;
  padding-left: 3.47rem;
  padding-right: var(--page-layout-padding);

  > a {
    width: 17.66rem;
    height: 23.27rem;
    margin-bottom: 1.05rem;
  }

  > h3 {
    text-align: center;
    margin-bottom: 1.22rem;
    white-space: nowrap;
  }
`;

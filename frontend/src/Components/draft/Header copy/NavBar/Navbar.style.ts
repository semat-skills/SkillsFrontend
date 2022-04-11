import styled from 'styled-components';

export const Container = styled.div`
 background-color: azure;


 .headerlink-dot {
  margin-top: -0.5rem;
  opacity: 0;
  transition: opacity 200ms linear;
}

.headerlink-title:hover .headerlink-dot {
  opacity: 1;
}

.headerlink-dot-active {
  margin-top: -0.5rem;
  display: block;
  background-color: green;
}
.headerlink-no-link {
  pointer-events: none;
}

.nav-classic{
    
}
`;
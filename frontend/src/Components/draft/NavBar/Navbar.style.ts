import styled from "styled-components";

export const Container = styled.div`
  /* background-color: azure; */
  align-items: center;
  min-height: 25px;
  .section-text {
    :hover {
      color: rebeccapurple;
      font-weight: bold;
    }
  }
  .nav-bar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    /* margin-left: 30px;
margin-right: 30px; */
  }
  width: 70%;

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
    /* background-color: green; */
  }
  .headerlink-no-link {
    pointer-events: none;
  }

  .nav-classic {
  }
`;

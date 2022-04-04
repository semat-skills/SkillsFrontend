import React from "react";
import { Container } from "./StoriesStyle";

export const Stories: React.FC = () => {
  return (
    <Container>
      <div className="first">
        <div className="StoryBox">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
          pellentesque purus viverra dignissim. Vel quam varius.
        </div>
        <div className="StoryBox">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
          pellentesque purus viverra dignissim. Vel quam varius.
        </div>
      </div>
      <div className="second">
        <div className="StoryBox">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
          pellentesque purus viverra dignissim. Vel quam varius.
        </div>
        <div className="StoryBox">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elementum
          gravida scelerisque nunc senectus ac. Aliquam auctor lacinia
          pellentesque purus viverra dignissim. Vel quam varius.
        </div>
      </div>
    </Container>
  );
};

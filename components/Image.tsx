import React, { FunctionComponent } from "react";
import Image from "react-bootstrap/Image";

type HelloProps = {
  src: any;
};

const MyImage: FunctionComponent<HelloProps> = ({ src }) => (
  <Image
        fluid={true}
        src={src}
        style={{ marginBottom: "30px" }}
      />
);

export default MyImage;
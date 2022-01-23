import { Carousel } from "react-carousel-minimal";

function Caroussel() {
  const data = [
    {
      image:
        "https://static.wixstatic.com/media/cda177_82bccef6d7fc4f629dfa06e6d4c2484f.jpg/v1/fill/w_581,h_412,al_c,q_80,usm_0.66_1.00_0.01/cda177_82bccef6d7fc4f629dfa06e6d4c2484f.webp",
    },
    {
      image:
        "https://static.wixstatic.com/media/cda177_a3ea143429114091b78f667c07c2e7a0.jpg/v1/fill/w_581,h_412,al_c,q_80,usm_0.66_1.00_0.01/cda177_a3ea143429114091b78f667c07c2e7a0.webp",
    },
    {
      image:
        "https://static.wixstatic.com/media/cda177_57c71b737d3d4237a174c0d525127d21.jpg/v1/fill/w_581,h_412,al_c,q_80,usm_0.66_1.00_0.01/cda177_57c71b737d3d4237a174c0d525127d21.webp",
    },
    {
      image:
        "https://static.wixstatic.com/media/cda177_eac6edd0f51044c59eb8541747b0add7.jpg/v1/fill/w_581,h_412,al_c,q_80,usm_0.66_1.00_0.01/cda177_eac6edd0f51044c59eb8541747b0add7.webp",
    },
  ];

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };
  return (
    <div className="Caroussel">
      <div style={{ textAlign: "center" }}>
        <div
        //   style={{
        //     padding: "0 20px",
        //   }}
        >
          <Carousel
            data={data}
            time={2000}
            width="790px"
            height="500px"
            captionStyle={captionStyle}
            radius="10px"
            slideNumber={false}
            slideNumberStyle={slideNumberStyle}
            captionPosition="bottom"
            automatic={true}
            dots={false}
            pauseIconColor="white"
            pauseIconSize="40px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
            thumbnails={false}
            thumbnailWidth="100px"
            style={{
              textAlign: "center",
              width: "750px",
              height: "400px",
              margin: "40px auto",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Caroussel;

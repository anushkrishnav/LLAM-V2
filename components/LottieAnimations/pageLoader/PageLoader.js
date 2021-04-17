import Lottie from "react-lottie";
import * as animationData from "./animations/PageLoader.json"

const PageLoader = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData.default,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <div style={{ marginBottom: "80px" }}>
            <Lottie
                options={defaultOptions}
                height={"calc(100px + 6vw)"}
                width={"calc(100px + 6vw)"}
            />
        </div>
    );
}

export default PageLoader
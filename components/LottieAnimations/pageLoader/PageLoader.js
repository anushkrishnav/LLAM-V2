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
        <div>
            <Lottie
                options={defaultOptions}
                height={"10vw"}
                width={"10vw"}
            />
        </div>
    );
}

export default PageLoader
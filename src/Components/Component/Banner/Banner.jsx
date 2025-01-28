import heroImage from "../../../assets/Image/Web_Banner_Crystal_Honey.webp"
const Banner = () => {
    return (
        <div className=" h-80vh  object-cover my-8">
            <div>
                <img className="w-full" src={heroImage} alt="" />
            </div>
        </div>
    );
};

export default Banner;
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function StyledLinkLeft({ title, link }) {
    const [t] = useTranslation("global");

    return (
        <div className="fixed left-0 top-0 bottom-0 w-[36px] group hidden md:flex items-center">
            <Link
                className="block min-w-[90px] relative left-[25px] text-center font-medium text-xl text-white z-20"
                to={link}
            >
                {t(title)}
            </Link>
            <div
                className="fixed top-0 left-0 bottom-0 w-[0px] group-hover:w-24
        bg-gradient-to-l from-transparent via-white/5 to-white/10 transition-all ease-in-out duration-500"
            />
        </div>
    );
}

export default StyledLinkLeft;

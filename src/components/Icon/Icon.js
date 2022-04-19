import Image from "next/image";

export default function Icon({ iconName, link }) {

    return (
        <div>
            <a target={"_blank"} rel="noreferrer" href={link} >
                <Image
                    src={`/Icons/${iconName}.svg`}
                    alt="image github"
                    width={30}
                    height={30}
                />
            </a>
        </div>
    )
}
import Link from "next/link";

interface LinksProps {
    text: String,
    href?: String
}

const Links = ({text, href}: LinksProps) => {
    return (
        <div>
            <Link href={`#${href ? href : ""}`} className="text-lg hover:opacity-70">{text}</Link>
        </div>
    );
}
 
export default Links;
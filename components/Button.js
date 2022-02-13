import Link from "next/link";
function Button({name,bgcolor="false",padding,hover,variants}) {
	return (
		<Link  classname ="link" href="/">
			<a
				variants={variants} 
				bgcolor={bgcolor} 
				padding={padding} 
				hover={hover}
			>{name}</a>
		</Link>
	)
}


export default Button;
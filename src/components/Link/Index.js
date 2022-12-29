import Link from 'next/link'

export default function C_Link( {children, href, ...props} ) {
  return (
    <Link {...props} href={href} legacyBehavior>  
        <a>{children}</a>
    </Link>
  );
}

interface ImageReloadProps {
  title?: string
}

const ImageReload: React.FC<ImageReloadProps> = ({ title }) => {
  return (
    <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      {title ? <title>{title}</title> : null}
      <path
        d="M25.4163 16.3012C25.1802 18.1012 24.4587 19.8029 23.329 21.2239C22.1993 22.645 20.7041 23.7317 19.0037 24.3675C17.3034 25.0033 15.462 25.1643 13.6771 24.8332C11.8922 24.5021 10.2311 23.6913 8.87196 22.4879C7.51282 21.2844 6.50691 19.7337 5.96211 18.002C5.4173 16.2703 5.35416 14.423 5.77946 12.6582C6.20475 10.8934 7.10244 9.27759 8.37623 7.98416C9.65003 6.69073 11.2519 5.76845 13.01 5.31621C17.8838 4.06621 22.9288 6.57496 24.7913 11.25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.5 5V11.25H19.25"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ImageReload

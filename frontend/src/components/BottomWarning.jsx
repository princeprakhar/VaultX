import { Link } from "react-router-dom"

const BottomWarning= ({contents, link, target}) =>{
    return <div className="py-2 text-sm flex justify-center">
      <div>
        {contents}
      </div>
      <Link className="pointer underline pl-1 cursor-pointer" to={target}>
        {link}
      </Link>
    </div>
}
export default BottomWarning;
interface Props {
  
  query: string;
  category: string;
  title: string;
}

const Header = ({ query, category, title}: Props) => {
  if(query && category){
    return (
      <h1 className="heading3 self-start text-white-800">
        Search Result's for  "{query}" in <span className="capitalize">{category}</span> category
      </h1>
    )
  }
  if(query){
    return (
      <h1 className="heading3 self-start text-white-800">
        Search Result's for  "{query}" 
      </h1>
    )
  }
  if(category){
    return (
      <h1 className="heading3 self-start text-white-800">
        Search Result's for <span className="capitalize">{category}</span> category
      </h1>
    )
  }
  return (
    <h1 className="heading3 self-start text-white-800">No Result's</h1>
  )
}

export default Header
import './category-item.style.scss'

const CategoryItem = ({category}) => {
    const {title,imageUrl} = category;
    return (
        <div className="category-wrap">
          <div className="category-image" style={
            {backgroundImage:`url(${imageUrl})`}
            }/>
          <div className="category-body-wrap">
            <h2>{title}</h2>
            <p>Shop Now</p>
          </div>
        </div>
    )
}

export default CategoryItem;
import { Button } from 'reactstrap'
import { Link } from 'react-router-dom'


const ItemDetailContainer = ({ product }) => {

  return (
    <>
      <Button>
        <Link to='/productos/producto:id' className="Link">
          Mas detalles
        </Link>
      </Button>
    </>
  )
};

export default ItemDetailContainer

import { useEffect, useState } from 'react';
import Directory from '../../components/directory/directory.component'


const Home = () => {
  const [categories,setCategories] = useState([])
  useEffect(() => {
    fetch('http://127.0.0.1:3003').then((respose)=> respose.json()).then((result) => {
      if (result.error != "") {
        console.log(result.error);
      }
      setCategories(result.data)
    })

  },[])

  return (
      <div>
        <Directory categories={categories} />
    </div>
  );
}

export default Home;

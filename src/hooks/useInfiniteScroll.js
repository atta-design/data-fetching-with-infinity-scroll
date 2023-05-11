import { useState, useEffect } from 'react';

const useInfiniteScroll = callback => {
  const [isFetching, setIsFetching] = useState(false);
  const[page,setPage]=useState(1)

const conten=document.querySelector("#conten")
// console.log( 
//   page)

  // useEffect(()=>{
  //   setPage(1)
  // },[callback])
  useEffect(() => {
    function handleScroll() {
      // callback()
     
      if (
        window.innerHeight + document.documentElement.scrollTop>=document.documentElement.offsetHeight &&callback===true
         
      ) {
        setPage(page+1)
        // setIsFetching(true)
      }

      // JUST FOR TEST. ignore this code. START
      if (window.scrollTop === -500 ) {
        // setIsFetching(true)
      }
      // END
    }
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[page]);
  return [page];
};

export default useInfiniteScroll;

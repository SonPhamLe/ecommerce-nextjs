import { usePathname, useRouter } from "next/navigation";
import React from "react";

export default function Pagination({totalPage,currentPage}){ 
    // const [currentPage, setCurrentPage] = React.useState(4);
    const router = useRouter()
    const pathname = usePathname();
    let maxPages = totalPage;
    let items = [];
    let leftSide = currentPage - 2;
    if(leftSide <= 0 ) leftSide=1;
    let rightSide = currentPage + 2;
    if(rightSide>maxPages) rightSide = maxPages;
    for (let number = leftSide ; number <= rightSide; number++) {
      items.push(
        <div key={number} className={(number === currentPage ? 'bg-gray-500 cursor-pointer text-lg px-3 pt-2 rounded m-1 w-10 h-10' : 'bg-black cursor-pointer text-lg px-3 pt-2 rounded m-1 w-10 h-10')} onClick={()=>{ router.push(`${pathname}/?page=${number}`)}}>
          {number}
        </div>,
      );
    }
  const nextPage = () => {
    if(currentPage<maxPages){
        router.push(`${pathname}/?page=${currentPage+1}`)
    }
  }
  
  const prevPage = () => {
    if(currentPage>1){
    //   setCurrentPage(currentPage-1)
    router.push(`${pathname}/?page=${currentPage-1}`)
    }
  }
  
  return (
      <div className="flex justify-center flex-col items-center w-full">
      <div> currentPage : { currentPage } </div>
        
        <div className="flex items-center">
          <div className={currentPage===1 ? `hidden` :`bg-black cursor-pointer text-lg px-3 pt-2 rounded m-1 w-10 h-10 `} onClick={prevPage}> &lsaquo; </div>
          {items}
          <div className={currentPage===maxPages? `hidden`:`bg-black cursor-pointer text-lg px-3 pt-2 rounded m-1 w-10 h-10`} onClick={nextPage}> &rsaquo; </div>
        </div>
      </div>
    );
  }
  
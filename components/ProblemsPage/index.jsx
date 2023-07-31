'use client' 
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import ReactPaginate from 'react-paginate';
import styles from "./pagination.module.css"; 

import SingleProblem from "@/components/ProblemsPage/SingleProblem";


function ProblemsPage({ problems }) {
    const router = useRouter();

    const pagginationHandler = (page) => { 
        router.push(`/problems/?page=${(page.selected+1)}`); 
        // GIVE IT SOME TIME TO RENDER 
        setTimeout(() => {  
            const targetElement = document.getElementById('problems'); 
            if (targetElement) {  
              const offsetTop = targetElement.getBoundingClientRect().top; 
              window.scrollTo({ top: offsetTop, behavior: 'smooth' }); 
            }  
          }, 100); // 100ms delay  
        // const newURL = `/laboratory/?page=${page.selected + 1}`; 
        // window.history.replaceState(null, null, newURL); 
    };   

    return ( 
        <>
          <section className="pt-[120px] pb-[120px]">
            <div className="container">
              <div className="-mx-4 flex flex-wrap justify-center">
                {problems.problems.map((problem, index) => (
                  <div
                    key={index} 
                    className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
                  >
                    <SingleProblem problem={ problem } /> 
                  </div>
                ))}
              </div>
    
              <div
                className="wow fadeInUp -mx-4 flex flex-wrap"
                data-wow-delay=".15s"
              >
                <div className="w-full px-4">
                    <ReactPaginate
                    className={styles.pagination} 
                    previousLabel={'previous'} 
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    activeClassName={'active'}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages_pagination'} 
                    
                    initialPage={problems.current_page - 1} 
                    pageCount={problems.page_count} 
                    marginPagesDisplayed={1} 
                    pageRangeDisplayed={3} 
                    onPageChange={pagginationHandler} 
                    />  
                </div>
              </div>
            </div>
          </section>
        </>
      );
}

export default ProblemsPage; 
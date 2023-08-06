import Image from "next/image";
import Link from "next/link";

const SingleProblem = ({ problem }) => {
  const { _id, title, solution, code, created_at } = problem;
  const dateString = created_at;
  const dateObj = new Date(dateString);

  // Format the date in a more readable way
  const formattedDate = dateObj.toLocaleString(); // Output: "7/30/2023, 5:54:37 PM"

  // If you want to customize the date format, you can use options with `toLocaleString`
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    // hour: "2-digit",
    // minute: "2-digit",
    // second: "2-digit",
    // timeZoneName: "short",
  };
  const customFormattedDate = dateObj.toLocaleString(undefined, options); // Output: "July 30, 2023, 5:54:37 PM GMT"
  
  return (
    <>
      <div
        className="m-5 h-64 md:h-72 wow fadeInUp relative overflow-hidden rounded-md bg-white shadow dark:bg-dark"
        data-wow-delay=".1s"
      >
        <div className="p-6 sm:p-8 md:py-8 md:px-6 lg:p-8 xl:py-8 xl:px-5 2xl:p-8">
          <h3>
            {/* make sure it fetches when needed only */}
            <Link
              href={"/solved/"+_id}  
              prefetch={false} 
              className="mb-4 block text-xl font-bold text-black hover:text-primary dark:text-white dark:hover:text-primary sm:text-2xl"
            > 
              { title } 
            </Link> 
          </h3>
          <p className="truncate mb-6 border-b border-body-color border-opacity-10 pb-6 text-base font-medium text-body-color dark:border-white dark:border-opacity-10">
            { solution } 
          </p>
          <div className="flex items-center"> 
            <div className="inline-block">
              <h4 className="mb-1 text-sm font-medium text-dark dark:text-white">
                Date
              </h4> 
              <p className="text-xs text-body-color">{ customFormattedDate }</p>  
            </div> 
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProblem;

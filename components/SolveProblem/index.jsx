'use client'
import { useRouter } from "next/navigation";
import { Loader } from "../shared/icons"; 
import { redirect } from "next/navigation";
import { useState } from "react";

function SolveProblemForm(props) {
    const router = useRouter(); 

    const [loading, setLoading] = useState(false); 
    
    async function onSubmit() {
        const description = document.getElementById("description").value; 
        const needCode = true; 
        setLoading(true); 
        const response = await fetch('/api/solve', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({  
              description: description, 
              needCode: needCode,
              accessToken: props.session.user.accessToken
            }),  
        });
        const data = await response.json();

        if (!response.ok) { 
            console.log("Error occured");
        }
        else {
            router.push("/solved/"+data.post_id);  
        } 
    } 

    return (
        <> 
        {loading ? <Loader /> : 
        <section id="contact" className="overflow-hidden py-16 md:py-20 lg:py-28">  
          <div className="container">    
            <div className="-mx-4 flex flex-wrap">
              <div className="w-full px-4 lg:w-7/12 xl:w-8/12">   
                <div
                  className="wow fadeInUp mb-12 rounded-md bg-primary/[3%] py-11 px-8 dark:bg-dark sm:p-[55px] lg:mb-5 lg:px-8 xl:p-[55px]"
                  data-wow-delay=".15s
                  "
                > 
                  <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-3xl lg:text-2xl xl:text-3xl">
                    Need Help? Let's Solve!
                  </h2>
                  <p className="mb-12 text-base font-medium text-body-color">
                    The Solution takes only about a minute.
                  </p>
                  <form>
                    <div className="-mx-4 flex flex-wrap">
                      <div className="w-full px-4">
                        <div className="mb-8">
                          <label
                            htmlFor="message"
                            className="mb-3 block text-sm font-medium text-dark dark:text-white"
                          >
                            Your algorithmic problem description
                          </label>
                          <textarea
                            id="description"
                            name="message"
                            rows={5}
                            placeholder="Enter your problem description"
                            className="w-full resize-none rounded-md border border-transparent py-3 px-6 text-base text-body-color placeholder-body-color shadow-one outline-none focus:border-primary focus-visible:shadow-none dark:bg-[#242B51] dark:shadow-signUp"
                          ></textarea>
                        </div>
                      </div>
                      <div className="w-full px-4"> 
                        <button onClick={onSubmit} className="rounded-md bg-primary py-4 px-9 text-base font-medium text-white transition duration-300 ease-in-out hover:bg-opacity-80 hover:shadow-signUp">
                          Solve!
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> 
        </section>
        }
        </>
    )
}
export default SolveProblemForm; 
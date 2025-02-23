import FeedLeft from '@/components/feedLeft'
import FeedRight from '@/components/feedRight'
import React from 'react'

export default function Page() {
  return (
    <div className=' py-12 w-11/12 mx-auto flex'>
      <div className='w-8/12 '>
        <FeedLeft/>
        
      </div>
      <div className=' w-4/12 pl-12'>
      <FeedRight/>
      </div>
    </div>
  )
}





















































// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Feed from "@/components/feed";

// export interface IArticle {
//   _id: string;
//   title: string;
//   thumbnail: string;
//   content: string;
//   author: string;
// }

// export default function Page() {
//   const [articles, setArticles] = useState<IArticle[]>([]);
//   const [loading, setLoading] = useState<boolean>(false);

//   const fetchAllArticle = async () => {
//     try {
//       setLoading(true);
//       const response = await axios.get(
//         "https://blog-backend-3hpg.onrender.com/articles"
//       );
//       setArticles(response.data.articles);
//       setLoading(false);
//     } catch (error) {
//       console.log("Something went wrong", error);
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchAllArticle();
//   }, []);

//   return (
//     <div>
        
//       <div>
//         {loading ? (
//           <div className=" space-y-6">
//             <div className="h-16 w-80 bg-gray-100"></div>
//             <div className="h-16 w-80 bg-gray-100"></div>
//             <div className="h-16 w-80 bg-gray-100"></div>
//             <div className="h-16 w-80 bg-gray-100"></div>
//             <div className="h-16 w-80 bg-gray-100"></div>
//           </div>
//         ) : (
//           <Feed articles={articles} />
//         )}
//       </div>
//     </div>
//   );
// }

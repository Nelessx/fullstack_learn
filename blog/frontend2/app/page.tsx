import React from 'react'

export default function Page() {
  return (
    <div className=' py-12'>
      <p className=' w-10/12 mx-auto text-center font-semibold text-white/50 py-10  text-9xl border-2 border-slate-200/40 rounded-3xl bg-slate-400/10 px-10'>
      BLOG-FEED SECTION
      </p>
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

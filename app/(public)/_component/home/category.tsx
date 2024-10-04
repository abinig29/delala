import { Home } from "lucide-react"
import Link from "next/link"

export default function Categories() {
  const categories = [
    { name: "Properties", icon: Home, link: "property" },
    { name: "Vehicles", icon: Home, link: "vehicle" },
    { name: "Classified", icon: Home, link: "classified" },
    { name: "Service", icon: Home, link: "service" },
    { name: "Jobs", icon: Home, link: "job" },
  ]

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold text-center mb-2">Categories</h2>
      <p className="text-center text-gray-600 mb-8">
        Order now and appreciate the beauty of nature
      </p>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 ">
        {categories.map((category) => (
          <Link
            href={`/product/${category?.link}`}
            key={category.name}
            className="flex flex-col items-center justify-center bg-white border rounded-lg py-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-[1px]  cursor-pointer"
          >
            <div className="bg-green-100 rounded-full p-4 mb-2">
              <category.icon className="w-8 h-8 text-green-500" />
            </div>
            <span className="text-sm font-medium">{category.name}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}



// import { Home } from "lucide-react"

// export default function Component() {
//   const categories = [
//     { name: "Properties", icon: Home },
//     { name: "Vehicles", icon: Home },
//     { name: "Classified", icon: Home },
//     { name: "Service", icon: Home },
//     { name: "Jobs", icon: Home },
//   ]

//   return (
//     <div className="w-full max-w-4xl mx-auto p-6 bg-green-50 rounded-xl shadow-lg">
//       <h2 className="text-2xl font-semibold text-center text-green-800 mb-8">
//         Order now and appreciate the beauty of nature
//       </h2>
//       <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//         {categories.map((category) => (
//           <div
//             key={category.name}
//             className="bg-white p-4 rounded-lg shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:bg-green-100 cursor-pointer"
//           >
//             <div className="flex flex-col items-center">
//               <div className="w-16 h-16 bg-green-200 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:bg-green-300">
//                 <category.icon className="w-8 h-8 text-green-600" />
//               </div>
//               <span className="text-sm font-medium text-green-700">{category.name}</span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }
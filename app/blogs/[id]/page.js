import { notFound } from "next/navigation";
import { blogsdata } from "../page";

// export async function getStaticPaths() {
//   const params = await generateStaticParams();
//   return {
//     paths: params.map((param) => ({ params: param })),
//     fallback: false,
//   };
// }
export async function generateStaticParams() {
  // No need for external data fetching here as you have `blogsdata`
  const params = blogsdata.map((post) => ({
    id: post.id.toString(), // Ensure ID is a string for matching routes
  }));
  return params;
}

export default function BlogPage({ params }) {
  const { id } = params;

//   if (id === "3") {
//     notFound(); // Handle non-existent ID as a 404
//   }

  return (
    <div className="mt-6">
      {`The blog id is: ${id} this is ${blogsdata[parseInt(id) - 1].title}`}
    </div>
  );
}

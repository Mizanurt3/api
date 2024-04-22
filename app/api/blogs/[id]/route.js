import {  NextRequest, NextResponse } from "next/server";
import { deletePost, getById, updatePost,getPosts } from "../../../lib/data";


// export async function generateStaticParams() {
//     // No need for external data fetching here as you have `blogsdata`
//     const params = getPosts.map((post) => ({
//       id: post.id.toString(), // Ensure ID is a string for matching routes
//     }));
//     return params;
//   }

export async function generateStaticParams() {
    const posts = await getPosts(); // getPosts অপ্রত্যাশিত বলে ধরে নেওয়া হচ্ছে
    if (!Array.isArray(posts)) {
        // ফাঁকা অ্যারে বা অ্যারে ছাড়া রিটার্ন মান পরিচালনা করুন
        console.error("getPosts অ্যারে ফেরত দেয়নি");
        return []; // অথবা একটি ত্রুটি ছুঁড়ে ফেলুন
    }

    const params = posts.map((post) => ({
        id: post.id.toString(),
    }));
    return params;
}
 
export async function GET(request) {

try{
  const id=request.url.split("blogs/")[1];
  console.log(id)
  const post =getById(id);
  if(!post){
   return NextResponse.json({message:"Error"},{status:404})
  }
  return NextResponse.json({message:"Ok",post},{status:200})
}catch(err){
  return NextResponse.json({message:"Error",err},{status:500})
}
}
// export async function DELETE(request) {
//   const id=request.url.split("blogs/")[1];
//   console.log(id)
//   deletePost(id);
//   return NextResponse.json({message:"Ok"},{status:200})
//   }
// export async function PUT(request) {
//     try{
//       const id=request.url.split("blogs/")[1];
//     const res = await request.json()
//     const title=res.title;
//     const desc=res.desc;
//     const date=res.date;
//     updatePost(id,title,desc)
//     return NextResponse.json({message:"Ok"},{status:200})
//     }catch(err){
//       return NextResponse.json({message:"Error"},{status:500})
//     }
//     }


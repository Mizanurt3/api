import {  NextRequest, NextResponse } from "next/server";
import { addPost, getPosts } from "../../lib/data";

export async function GET(){
  // return NextResponse.json({Name:"Mizanur"},{status:201})
  try{
    const posts=getPosts();
    return NextResponse.json({message:"Ok",posts},{status:200})
  }catch(err){
    return NextResponse.json({message: "Error"},{status: 500})

  } 
}
export async function POST(request) {
  const res = await request.json()
  const title=res.title;
  const desc=res.desc;
  const date=res.date;
  const id=res.id;
  console.log("hi")
  // return NextResponse.json({ title:title||"Mizan" })
 try {
        const post = {
          id: id,
          title:title||"",
          desc: desc ||"",
          date: date || new Date()
          
        };
    
        addPost(post);
        return NextResponse.json({ message: "Ok", post }, { status: 201 });
      } catch (err) {
        return NextResponse.json({ message: "Mizan Error" }, { status: 500 });
      }
}

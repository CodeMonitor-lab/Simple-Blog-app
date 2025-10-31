import React, { useEffect, useState } from 'react';
import {PostsCard} from '@/components/custom/posts'
import apiClient from '@/api/apiClient';
import toastMsg from '@/utils/toastMsg';
import data from "@/components/data.json";


const PostCatagory = () => {


  return (
    <main>
    <section className='grid gap-2 grid-cols-2 sm:grid-cols-2 lg:grid-cols-4' >
      {data.map((post,index)=>(
        <PostsCard
        key={index}
        title={post.title}
        desc={post.desc}
        image={post.image}
        />
      ))}
      </section>

    </main>
  );
};

export default PostCatagory;

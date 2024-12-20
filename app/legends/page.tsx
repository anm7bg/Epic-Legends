import Link from 'next/link';
import { blogCard } from '@/app/lib/interface';


// import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import Image from 'next/image';
import { Button } from '@nextui-org/button';
import { getPosts } from '@/lib/service';
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';

const BlogPage = async () => {
	const posts: blogCard[] = await getPosts();

	console.log("Posts")
	console.log(posts)

	return (
        // <p>Loading</p>
		<div className="blog-page">
			<h2>Epic Legends Blog Posts</h2>
			<p>Explore Epic Legends, your ultimate destination for tales of heroism, mythical sagas, and legendary adventures. Dive into timeless stories, uncover legendary characters, and fuel your imagination with epic narratives from every corner of history and fiction.</p>
			<div className="posts">
				{posts.map((post: any, idx: number) => {
                    console.log("Post")
                    console.log(post)
					return (
						<Card className='mb-[20px]' key={idx}>
                            <Image 
                                src={post.featuredImage.node.sourceUrl} 
                                alt="image" 
                                width={600} 
                                height={400}
                                className='rounded-t-lg object-cover'
                            />
                            <CardHeader className='py-[5px] my-[5px] blog-card-head'>
                                <h3 className='text-center text-lg line-clamp-2'>{post.title}</h3>
                            </CardHeader>
                            <CardBody className='p-[5px]'>
                                <p className='line-clamp-2 text-sm'>{post.shortDesc}</p>
                            </CardBody>
                            <CardFooter>
                                <Button className='w-full mt7'>
                                    <Link href={`${post.slug}`}>Read</Link>
                                </Button>
                            </CardFooter>
                        </Card>
					);
				})}
			</div>
		</div>
	);
};

export default BlogPage;
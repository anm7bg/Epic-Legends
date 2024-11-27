import { fetchAPI } from "./base";


export async function getPosts() {
  const data = await fetchAPI(
    `query FetchPosts {
      category(id: "dGVybToxMg==") {
        posts(first: 100) {
          nodes {
            excerpt
            featuredImage {
              node {
                sourceUrl
              }
            }
            slug
            title
            content
          }
        }
      }
    }`,
  );

  return data?.category?.posts?.nodes;
}

export async function getPostBySlug(slug: string) {
  const data = await fetchAPI(
    `query GetPost($id: ID = "") {
    post(id: $id, idType: SLUG) {
      content
      featuredImage {
        node {
          sourceUrl
        }
      }
      slug
      title
    }
  }`,
    {
      variables: {
        id: slug,
      },
    }
  );

  return data?.post;
}
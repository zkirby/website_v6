// import React from "react";
// import ReactMarkdown from "react-markdown";

// class Markdown extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = { body: null };
//   }

//   componentDidMount() {
//     const { link } = this.props;
//     fetch(link)
//       .then((response) => response.text())
//       .then((text) => {
//         this.setState({ body: text });
//       });
//   }

//   render() {
//     const { body } = this.state;

//     return (
//       <div className="content">{body && <ReactMarkdown source={body} />}</div>
//     );
//   }
// }

// // export default function Template({
// //   data, // this prop will be injected by the GraphQL query below.
// // }) {
// //   const { markdownRemark } = data // data.markdownRemark holds your post data
// //   const { frontmatter, html } = markdownRemark
// //   return (
// //     <div className="blog-post-container">
// //       <div className="blog-post">
// //         <h1>{frontmatter.title}</h1>
// //         <h2>{frontmatter.date}</h2>
// //         <div
// //           className="blog-post-content"
// //           dangerouslySetInnerHTML={{ __html: html }}
// //         />
// //       </div>
// //     </div>
// //   )
// // }

// export default Markdown;

// // export const pageQuery = graphql`
// //   query($slug: String!) {
// //     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
// //       html
// //       frontmatter {
// //         date(formatString: "MMMM DD, YYYY")
// //         slug
// //         title
// //       }
// //     }
// //   }
// // `

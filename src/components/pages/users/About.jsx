import MainLayout from "../../layouts/MainLayout"
import DocumentTitle from "react-document-title"

const About = () => {
    return (
        <MainLayout>
        <DocumentTitle title='เกี่ยวกับเรา' />

        {/* <iframe width={'100%'} height={600} src="https://www.youtube.com/embed/SwvAGEGRcoY" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen /> */}

        <div className="container mb-5">
          <h1 className="my-4">เกี่ยวกับเรา</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, aut omnis suscipit animi laborum fuga nostrum earum molestiae sequi iusto cupiditate? Cupiditate magni debitis fugiat dolore odio ut, pariatur nesciunt minima inventore molestias minus perferendis rem esse amet illo officiis repudiandae voluptas quidem cumque aperiam iusto corrupti nisi consectetur nemo. Molestias omnis adipisci maiores accusamus eligendi numquam eaque aspernatur ex, nisi natus vero laboriosam ut repellat a impedit, amet et consequuntur reiciendis. Illum recusandae incidunt reiciendis veniam earum similique commodi, voluptatem nulla illo ut quam, voluptate, quaerat rem ratione enim? Quidem dignissimos sequi ipsa, consectetur nostrum sit obcaecati voluptatum fugiat.</p>
        </div>
        </MainLayout>
    )
  };
  
  export default About
  
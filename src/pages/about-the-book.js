import React from "react"
import { Helmet } from "react-helmet"
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../static/book/book1-min.png'

import Layout from "../components/layout"
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'

const Book = (props) => {

  const slug = (props.location.href);

  const disqusConfig = {
      shortname: 'donald-scott',
      config: { identifier: 12, slug }
  }

  return(
    <Layout>
      <Helmet title="About the Book | Donald Scott"/>
      <Nav pathExt={props.path}/>
        <Banner 
            spanFirst={`About the`} 
            contextHeading={`Book`}/> 
      <main className="wrapperMain">
          <div
              className="container"
              id="book-containers" >

              <BookInfo
                  data={{
                      title: `American Racism and What You Can Do About It`,
                      spanFirst: `The Hard Truth About America and Americans`,
                      imgSrc: Book1,
                      id: 'racism',
                      content:
                          `
                              <p>
                              This book  tells the hard truths of America's Founding Documents, written in 1776 and 1787 for white Americans and their future generations.
                              Hard truths bring pain but are necessary for people to take the proper actions  to correct the correctable and live with the uncorrectable.
                              The God of the Universe and of mankind is included in my assessment of hard truths Americans must confront to end institutional racism.
                              </p>
                                      
                          `,

                      ebooks: {
                          stratton: 'https://www.stratton-press.com/books/american-racism-and-what-you-can-do-about-it-the-hard-truth-about-america-and-americans/',
                          barnes: 'https://www.barnesandnoble.com/w/american-racism-and-what-you-can-do-about-it-donald-l-scott/1137152743?ean=9781648950759',
                          amazon: 'https://www.amazon.com/American-Racism-What-You-About-ebook/dp/B089TZ6QH7/ref=sr_1_1?dchild=1&keywords=9781648950759&qid=1591741616&sr=8-1',
                      },
                      paperback: {
                          amazon: 'https://www.amazon.com/American-Racism-What-You-About/dp/1648950744/ref=sr_1_1?dchild=1&keywords=9781648950742&qid=1591984869&sr=8-1',
                          barnes: 'https://www.barnesandnoble.com/w/american-racism-and-what-you-can-do-about-it-donald-l-scott/1137152743?ean=9781648950742',
                          booksamillion: 'https://www.booksamillion.com/p/American-Racism-What-Can-About/Donald-L-Scott/9781648950742?id=8073341109352',
                      }
                  }}
              />

              <div className="commentSection" >
                  <div id="disqus_thread">
                      <DiscussionEmbed {...disqusConfig} />
                  </div>
              </div>
          </div>
      </main>
    </Layout>
  )
}

export default Book

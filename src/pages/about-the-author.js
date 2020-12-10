import React from 'react';
import { Helmet } from 'react-helmet';

import Layout from '../components/layout';
import Nav from '../components/nav';
import Banner from '../components/non-front-banner'
import AuthorImg from '../static/author/dummy-profile.jpg'

const Author = (props) => {
    return(
        <>
            <Layout>
                <Helmet title="About the Author | Donald Scott"/>
                <Nav pathExt={props.path}/>
                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} /> 

                <div className="container">
                    <section className="body-author-contents columns">

                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img src={AuthorImg} alt="author-profile"/>
                            </div>

                            <div className="heading-quote">
                                <h4>

                                </h4>
                                <span className="ata-span-fx">
                                </span>
                            </div>

                        </div>

                        <article className="article-section column" id="author">
                            <p>
                            My experience with American racism spans over eighty years and prepared me to share insights and observations of the white majority's rule in America. I am among the first African Americans to integrate public schools because of the 1954 Supreme Court decision that ended racial segregation in public schools in America and to assume leadership positions in previously all-white organizations and was among the first of that cohort appointed to senior executive positions in the military and federal government.
                            </p>
                            <p>
                            As the founding director of AmeriCorps National Civilian Community Corps, a national service program purposefully designed to attract eighteen- to twenty-four-year-old racially and gender-diverse youths; chief operating officer, City of Atlanta, Georgia, assisting Mayor Maynard Jackson to balance support between the white majority and minority populations; Deputy Librarian of Congress managing day-to-day operations and spearheading the resolution of decades old racial discrimination cases; and from rising through the ranks in the United States Army from second lieutenant to brigadier general, I was honored to be a part of the long, hard examination and revision of army regulations, policies, and systems that got rid of discriminatory measures that denied opportunities on the basis of race and gender. The US Army and uniformed services continue to have the highest trust among Americans for integrity and competence.
                            </p>
                            <p>
                            I will offer suggestions to defeat institutional racism and keep the focus of the inspiring words in the Declaration of Independence.
                            </p>
                            
                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Donald Scott</span>
                                </span>
                            </p>

                        </article>

                    </section>
                </div>
            </Layout>
        </>
    )
}

export default Author;
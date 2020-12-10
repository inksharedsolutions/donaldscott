import React from 'react'
import {Link} from 'gatsby'
import AuthorImg from '../static/author/dummy-profile.jpg'

const LowerMain = ()=>{
    return(
        <>
            <section className="author-section">
            <div className="grid-two-columns" id="author-container">
                    <div className="wrapper-auth-content auth-img-container">
                        <img src={AuthorImg} />
                    </div>

                    <div className="wrapper-auth-content" id="auth-content-wrapper">    
                        <p className="italic-tag margin-off">Well done, good and faithful servant</p>
                        <h1>    
                            The Author
                        </h1>

                        <p className="author-content">
                            My experience with American racism spans over eighty years and prepared me to share insights and observations of the white majority's rule in America.<br /><br />
                            I am among the first African Americans to integrate public schools because of the 1954 Supreme Court decision that ended racial segregation in public schools in America and to assume leadership positions in previously all-white organizations and was among the first of that cohort appointed to senior executive positions in the military and federal government.
                            
                            <Link to="/about-the-author"
                             className="link-read">
                                read more
                            </Link>
                        </p>
                        
                        <p className="margin-off auth-name">
                            Donald Scott
                        </p>

                        <span className="span-tagline italic-tag">
                            Author & Writer
                        </span>
                        
                    </div>
                </div>
          
            </section>
        </>
    )
}

export default LowerMain 

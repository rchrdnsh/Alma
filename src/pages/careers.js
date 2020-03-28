import React from 'react'
import { graphql } from 'gatsby'
import { navigate } from '@reach/router'
import styled from 'styled-components'
import SEO from '../components/SEO'

import Content from '../components/Content'
import Box from '../components/Box'
import { Image } from '../components/Image'
import { HeadingContainer } from '../components/layout/FullContentCard'
import Arrow from '../components/Arrow'
import AlmaHeader from '../components/Header'
import { Button, } from '../components/Button'
import { H1, H2, P, UL, LI } from '../components/Typography'
import Watermark from '../components/Watermark'
import Caption from '../components/Caption'

import Footer from '../components/Footer'

const StickyBox = styled.div`
  grid-column: 1 /4;
  margin: 0;
  padding: 0;
  z-index: 1;
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 
    minmax(2rem, 1fr) 
    minmax(1rem, 45rem) 
    minmax(2rem, 1fr)
  ;
  grid-row-gap: 2rem;
`

const CenteredStickyContainer = styled(Box)`
  position: fixed;
  bottom: 8vh;
  bottom: calc(var(--vh, 1vh) * 10);
  width: 100vw;
  margin: 0;
  padding: 0;
  background: white;
  opacity: 1;
  z-index: 5;
  padding: 1rem;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
  box-shadow: 0px 0px 32px rgba(0,0,0,.25);

  @media (orientation: landscape) {
    align-self: center;
    justify-self: center;
    /* max-width: 75%; */
    position: sticky;
    top: 0;
    border-radius: 32px;
    margin: 1rem 0;
    padding: 1rem 0;
    overflow-x: initial;
    overflow-y: initial;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
  }
`

const CustomSpace = styled.div`
  height: 2rem;

  @media (orientation: landscape) {
    height: 8rem
  }
`

const JobButton = styled.button`
  background: #ddd;
  display: inline-block;
  border: none;
  font-size: 10px;
  padding: 0.5rem 1.25rem;
  margin: 0 0.5rem 0.5rem 0.5rem;
  border-radius: 16px;

  &:active {
    background: #111;
  }

  &:focus {
    background: #555;
    color: white;
    outline: none;
  }

  @media (orientation: landscape) {
    margin: 0 1rem;
    font-size: calc(6px + (18 - 6) * ((100vw - 300px) / (1600 - 300)));
  }
`

const Showroom = ({ data }) => {

  return (
    <Content space={'2'}>

      <SEO title="Careers" />
      
      <Box featured>
        <HeadingContainer>
          <AlmaHeader white title="Careers"/>
        </HeadingContainer>
        <Image grid fluid={data.booklet.childImageSharp.fluid}/>
        <Caption large>Actual Image</Caption>
        <Watermark large/>
        <Arrow/>
      </Box>

      <P center>We are an international company with a new showroom located in Costa Mesa, California. We are an off-site sales operation for a five-star resort being built in Nha Trang, Vietnam. Our focus initially is to market to the Southern California Vietnamese American community and expand that market as we grow as a company. We are looking for people  with drive and confidence to succeed. We seek enthusiastic and dependable people who are willing to adapt to a fast-paced work environment. We will train the right individuals to join our growing team today.</P>

      <StickyBox>

        <CenteredStickyContainer center>
          {/* <JobButton onClick={() => {navigate('#office-manager')}}>
            Office Manager
          </JobButton> */}
          <JobButton onClick={() => {navigate('#administrative-assistant')}}>
            Administrative Asistant
          </JobButton>
          <JobButton onClick={() => {navigate('#vacation-counselor')}}>
            Vacation Counselor
          </JobButton>
          {/* <JobButton onClick={() => {navigate('#event-staff')}}>
            Event Staff
          </JobButton> */}
        </CenteredStickyContainer>

        {/* <Box center id="office-manager">
          <H1>Office Manager</H1>
          <P><strong>Hours of Operation:</strong> Tuesday – Saturday. Must be flexible</P>
          <P><strong>Compensation:</strong> $45,000 to $50,000 annually depending on experience plus monthly bonus</P>
          <P><strong>Benefits:</strong> Full benefits available after 60 days of employment</P>

          <H2>Position Overview</H2>

          <P>We are looking for an Office Manager who is very detail oriented and has very good organizational skills. The candidate will be responsible for the overall running of the office, kids club, staffing, training, contract processing and supporting the sales and marketing organizations. The candidate should have excellent communication skills and preferably proficient in English and Vietnamese.</P>

          <H2>Office Manager Duties and Responsibilities</H2>

          <UL>
            <LI>Hire, train and manage the administrative staff</LI> 
            <LI>Process sales contracts in an expeditious, efficient manner</LI>
            <LI>Ensure that guests are properly checked in, dispositioned in the system and taken care of properly throughout the guest experience</LI>
            <LI>For those guests with children, manage the check-in process and supervise the Kids Club activities while the parents are in the Sales process</LI>
            <LI>Manage the inventory, distribution and accounting of gifts to be given to guests and orchestrate the daily/weekly coordination of the front desk, food & beverage, gifting and contract processing functions and ensure that Sales & Marketing collateral and first day incentive materials are adequately stocked</LI>
            <LI>Learn new tracking software and ensure that all administrative staff are trained properly</LI>
            <LI>Run timely marketing and sales reports as directed</LI>
            <LI>Ensure that all contracts, reports etc. are reported and filed properly</LI>
            <LI>Manage the ordering of office supplies and other supplies for serving guests</LI>
            <LI>Create a positive atmosphere in supporting sales operations in the office</LI>
            <LI>Maintain professionalism at all times and ensure the same for all employees</LI>
            <LI>Coordinate payroll with PEO company and accounting with outsourced accounting firm</LI>
            <LI>Write SOP’s as directed</LI>
            <LI>Establish the weekly scheduling for all Sales & Marketing Operations Team personnel to ensure proper operational coverage</LI>
            <LI>Manage the Payroll processing function for all Sales & Marketing Center personnel to ensure accurate and timely salary, hourly and commission payments</LI>
            <LI>Oversee all Bank Account activity and relations with Bank Staff and Management</LI>
            <LI>Review and administer all weekly/monthly payroll, accounting & internal/third-party billing & accounts receivable for accuracy and timely payment processing</LI>
            <LI>Work with internal Marketing and Sales stakeholders to customize and design performance metrics and cost/benefit reports using Excel and other reporting tools</LI>
            <LI>Gather, refine, and transform data into accurate and valuable analytics reports that support decision making and process improvements</LI>
            <LI>Supervise all aspects of the Contract Processing and Closing process to ensure that all Federal and State regulatory information, documents and requirements are current in the Closing process and reviewed and updated on a regular basis</LI>
          </UL>

          <H2>Office Manager Requirements and Qualifications</H2>

          <UL>
            <LI>Prior experience handling office responsibilities, experience in customer service, or related field</LI> 
            <LI>Excellent verbal and written communication skills</LI>
            <LI>Flexible in working hours</LI>
            <LI>Bilingual in English and Vietnamese a plus</LI>
            <LI>Highly organized multi tasker who works well in a fast-paced environment</LI>
            <LI>Undergraduate or graduate degree in a business discipline with proven analytical experience and skills</LI>
            <LI>Strong computer skills are a requirement with demonstrated experience working with Excel and other performance analytics tools preferred</LI>
            <LI>Possess high level of competency and demonstrable skills in Microsoft Office Suite (Excel, PowerPoint, Word, QuickBooks, etc.)</LI>
            <LI>Superior analytical and problem-solving skills</LI>
            <LI>Strong interpersonal skills with ability to work in a highly visible role that will interact with individuals at all organizational levels, customers and leaders in the local community</LI>
            <LI>Strong project management skills and ability to self direct efforts towards results without detailed instructions from management is a requirement</LI>
            <LI>Improve and challenge existing procedures and practices to maximize efficiency</LI>
            <LI>Maintain and analyze key marketing and sales productivity and forecasting metrics</LI>
            <LI>Work closely with Senior Sales & Marketing leaders to ensure accurate & timely delivery of information required for performance analysis to review and develop action plans</LI>
            <LI>Investigate and resolve revenue/cost/vendor/payroll/commissions issues</LI>
            <LI>Help support Executive Management by collaborating with sales, marketing and operations/servicing teams</LI>
            <LI>Accounting or Finance background a plus</LI>
          </UL>

          <H2>Contact Information</H2>

          <P><strong>Hank Scott</strong></P>
          <P><strong>Email:</strong> hank@almavacations.com</P>
          <P><strong>Mobile:</strong> (949) 878-8287</P>

        </Box> */}

        <H1 center id="administrative-assistant">Administrative Assistant</H1>
        <P center><strong>Hours of Operation:</strong> Tuesday - Saturday. Must be flexible</P>
        <P center><strong>Compensation:</strong> $15.00 per hour plus monthly bonus.</P>
        <P center><strong>Benefits:</strong> Full benefits available after 60 days of employment</P>
        <H2 center>Position Overview</H2>
        <P center>We are looking for an administrative assistant in an entry level position to assist the office manager running the office. The candidate will be responsible for a variety of duties including reception duties, serving customers, supervising the kids’ corner, performing a variety of sales and marketing reporting and helping in contract processing. The position requires flexibility and the ability to learn new things. The candidate should have excellent communication and organizational skills and preferably proficient in English and Vietnamese.</P>
        <H2 center>Administrative Assistant Duties and Responsibilities</H2>
        <UL center>
          <LI>Perform various functions as directed by the Office Manager</LI> 
          <LI>Help process sales contracts in an expeditious, efficient manner</LI>
          <LI>Ensure that guests are properly checked in and taken care of properly</LI>
          <LI>Learn new tracking software for reception duties and reporting</LI>
          <LI>Run timely marketing and sales reports as directed</LI>
          <LI>Ensure that all contracts, reports etc. are filed properly</LI>
          <LI>Create a positive atmosphere in supporting sales operations in the office</LI>
          <LI>Maintain professionalism at all times</LI>
        </UL>
        <H2 center>Administrative Assistant Requirements and Qualifications</H2>
        <UL center>
          <LI>Proficient computer skills including Microsoft Office Suite</LI> 
          <LI>Prior experience handling office responsibilities, experience in customer service, or related field</LI>
          <LI>Excellent verbal and written communication skills</LI>
          <LI>Flexible in working hours</LI>
          <LI>Bilingual in English and Vietnamese a plus</LI>
          <LI>Highly organized multi tasker who works well in a fast-paced environment</LI>
        </UL>

        <H2 center>Contact Information</H2>
        <P center><strong>Annie Nguyen</strong></P>
        <P center><strong>Email:</strong> annie@almavacations.com</P>
        <P center><strong>Mobile:</strong> (619) 885-6666</P>

        <H1 center id="vacation-counselor">Vacation Counselor</H1>

        <P center><strong>Hours of Operation:</strong> Tuesday - Saturday. Must be flexible</P>
        <P center><strong>Compensation:</strong> Salary + Commission + Bonus ($75,000 - $250,000)</P>
        <P center><strong>Benefits:</strong> Full benefits available after 60 days of employment</P>

        <H2 center>Position Overview</H2>

        <P center>We are looking for people with drive and confidence to succeed. We seek enthusiastic and dependable people who are willing to adapt to a fast-paced work environment. We are looking to train the right individuals to join our growing team today. Our elite, in-depth training is the best in the industry. We will provide you with the necessary skills, tools and product knowledge to help you succeed and reach your goals. No sales experience required.</P>

        <H2 center>Vacation Counselor Duties and Responsibilities</H2>

        <UL center>
          <LI>Meet assigned appointments with prospective clients and current guests to create and deliver vacation ownership presentations to them</LI> 
          <LI>Present and sell to prospective clients the weeks at the Alma Resort villas or condos</LI>
          <LI>Welcome guests warmly to the resort and provide them with brief information about the resort, resort activities and services, and activities in the area</LI>
          <LI>Complete all paperwork and documentation following established procedures for all sales transactions</LI>
          <LI>Manage time effectively in order to handle multiple presentations on a weekly basis</LI>
          <LI>Attend all sales departmental and division meetings and any other functions as needed</LI>
        </UL>

        <H2 center>Vacation Counselor Requirements and Qualifications</H2>

        <UL center>
          <LI>Proficient computer skills including Microsoft Office Suite</LI> 
          <LI>Highly organized multi tasker who works well in a fast-paced environment</LI>
          <LI>Must have reliable transportation</LI>
          <LI>Minimum of six months of guest service experience is required</LI>
          <LI>Strong sales experience with proven ability to close is a plus</LI>
          <LI>Excellent verbal and written communication skills with the ability to effectively present information and answer questions from guests, owners, and management</LI>
          <LI>Able to read, analyze, and interpret documents such as general business periodicals, professional journals, technical procedures, and governmental regulations</LI>
          <LI>Ability to calculate basic mathematical skills to determine figures and amounts for sales</LI>
          <LI>Must be flexible to work weekends and some holidays</LI>
          <LI>Bilingual in English and Vietnamese a plus</LI>
        </UL>

        <H2 center>Contact Information</H2>

        <P center><strong>Annie Nguyen</strong></P>
        <P center><strong>Email:</strong> annie@almavacations.com</P>
        <P center><strong>Mobile:</strong> (619) 885-6666</P>

        {/* <Box center id="event-staff">
          <H1>Event Staff</H1>
          <P><strong>Hours of Operation:</strong> Flexible hours including evenings, weekends and holidays</P>
          <P><strong>Compensation:</strong> $12 - $20 per hour based on experience + Bonus</P>
          <P><strong>Benefits:</strong> On-call / Seasonal / Part-time</P>
          <H2>Position Overview</H2>
          <P>If you enjoy working flexible hours, in an awesome team environment, and impacting thousands of people's lives in a positive way, then we look forward to learning more about you and discussing potential opportunities that we might have at Alma. This job could lead to a permanent position in the future.</P>
          <H2>Duties and Responsibilities</H2>
          <UL>
            <LI>Work at marketing events, exhibitions, media productions, and client sites </LI> 
            <LI>Set up and tear down tents, tables, chairs, signage, aesthetics, etc.</LI>
            <LI>Staff event booths, engage attendees, perform registration</LI>
            <LI>Hand out promotional materials and items, demonstrate products, and converse with attendees</LI>
            <LI>Actively collect contact information as lead generation</LI>
            <LI>Assist with the collation and production of marketing materials and literature</LI>
            <LI>Assist in traditional and new (social/online) media campaigns and monitor progress</LI>
            <LI>Keep inventory of all event materials, props, supplies, etc.</LI>
            <LI>Distribute marketing collateral at various sites</LI>
            <LI>Transport promotional materials to and from various locations</LI>
            <LI>Perform other event or administrative duties as necessary</LI>
          </UL>
          <H2>Requirements and Qualifications</H2>
          <UL>
            <LI>Must be enthusiastic, engaging, brand savvy, well organized and self-motivated and able to work independently</LI> 
            <LI>Ability to multitask, take direction and work in small and large groups</LI>
            <LI>Must have a positive attitude and willingness to learn new tasks</LI>
            <LI>Must maintain poised and polished appearance at all times while conducting promotions</LI>
            <LI>Must have a passion for promoting and ability to communicate brand effectively with the audience</LI>
            <LI>Conversational Vietnamese proficiency preferred but not mandatory. Some reading competency is a plus</LI>
            <LI>Must have reliable transportation and a mobile device</LI>
            <LI>Ability to stand for extended periods of time and lift up to 20 lbs</LI>
          </UL>

          <H2>Contact Information</H2>
          <P><strong>Gia Ly</strong></P>
          <P><strong>Email:</strong> travel@alma.vacations</P>
          <P><strong>Mobile:</strong> (714) 855-0409</P>

        </Box> */}

      </StickyBox>

      <Footer/>

    </Content>
  )
}

export const query = graphql`
  query {
    booklet: file(relativePath: { eq: "showroom/booklet-3x2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 2880) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
  }
`

export default Showroom